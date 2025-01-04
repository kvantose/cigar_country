using System;
using System.Configuration;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Serilog;

var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

var configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .AddJsonFile($"appsettings.{(string.IsNullOrWhiteSpace(environment) ? "Development" : environment)}.json", true)
    .AddEnvironmentVariables()
    .Build();

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console().CreateBootstrapLogger();

try
{

    var builder = WebApplication.CreateBuilder(args);
    var services = builder.Services;

    services.Configure<IdentityOptions>(options =>
    {
        // ...
    });

    services.AddCors(opt =>
    {
        opt.AddDefaultPolicy(builder => builder.SetIsOriginAllowed(_ => true).WithOrigins("http://localhost:5173")
            .AllowAnyHeader().AllowAnyMethod().AllowCredentials());
    });

// игнорирование регистра (url без заглавных букв)
    services.Configure<RouteOptions>(options => options.LowercaseUrls = true);

// подключение репозиториев

    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.RequireHttpsMetadata = false;
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false,
                //ValidIssuer = "",

                ValidateAudience = false,
                //ValidAudience = "",

                ValidateLifetime = true,

                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(configuration["Jwt:Key"])),
                ValidateIssuerSigningKey = true,
            };
        });

    services.AddAuthorization(options =>
    {
        options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
            .RequireAuthenticatedUser()
            .Build();
    });

    services.AddControllers();
    services.AddHttpContextAccessor();
    services.AddSerilog((_,lc)=>lc.ReadFrom.Configuration(configuration));

    services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/build"; });

    await using var app = builder.Build();
    var env = app.Environment;

    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseCors();
    }
    else
    {
        app.UseExceptionHandler("/Error"); //ToDo: do it better
        app.UseHsts();
    }

    app.UseRouting();
    app.UseHttpsRedirection();
    app.UseStaticFiles();
    app.UseSpaStaticFiles();
    app.UseAuthentication();

    app.MapControllers();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });

    app.UseSpaStaticFiles(new StaticFileOptions(){RequestPath = "/ClientApp/dist"});
    app.UseSpa(spa =>
    {
        spa.Options.SourcePath = "ClientApp";

        if (env.IsDevelopment())
        {
            spa.UseProxyToSpaDevelopmentServer("http://localhost:5173");
            // актуально для ReactJS
            // spa.UseReactDevelopmentServer(npmScript: "start");
        }
    });

    Log.Information($"Starting web host with env {env.EnvironmentName}");
    await app.RunAsync();

    return 0;
}
catch (Exception ex)
{
    Log.Fatal(ex, "Host terminated unexpectedly");
    return 1;
}
finally
{
    await Log.CloseAndFlushAsync();
}