using System;
using System.Net.Http.Headers;
using CigarHelper.Controllers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Yarp.ReverseProxy.Transforms;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// Add services to the container.
builder.Services
    .AddAuthorization()
    .AddAuthentication(options => configuration.Bind("Authentication", options))
    .AddCookie()
    .AddOpenIdConnect(options => configuration.Bind("OpenIdConnect", options))
    ;
builder.Services.AddHttpForwarder();

builder.Services.AddCors(
    options => options.AddPolicy(
        HomeController.CorsPolicyName,
        policyBuilder =>
        {
            var allowedOrigins = configuration.GetSection("CorsSettings:AllowedOrigins").Get<string[]>();

            if (allowedOrigins is { Length: > 0 })
                policyBuilder.WithOrigins(allowedOrigins);

            policyBuilder
                .WithMethods(HttpMethods.Get)
                .AllowCredentials();
        }));

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors(HomeController.CorsPolicyName);
app.UseAuthentication();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapControllers();

const string key = "OpenIdConnect:Resource";
var destinationPrefix = configuration.GetValue<string>(key)
                        ?? throw new InvalidOperationException($"The value {key} must be set");

app.MapForwarder(
    "/cc/{**catch-all}",
    destinationPrefix,
    builderContext =>
    {
        // Cut the "/bff" prefix from the request path
        builderContext.AddPathRemovePrefix("/cc");
        builderContext.AddRequestTransform(async transformContext =>
        {
            // Get the access token received earlier during the authentication process
            var accessToken = await transformContext.HttpContext.GetTokenAsync(OpenIdConnectParameterNames.AccessToken);

            // Append a header with access token to the proxy request
            transformContext.ProxyRequest.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
        });
    }).RequireAuthorization();

app.MapFallbackToFile("index.html").RequireAuthorization();


app.Run();
