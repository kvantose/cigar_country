using System.IO;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;


namespace CigarHelper.Models;

public class ApplicationContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public ApplicationContext(){}
    
    public ApplicationContext(DbContextOptions options)
    {
    }
    public ApplicationContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }
    public ApplicationContext(DbContextOptions options,IConfiguration configuration)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to sqlite database
        options.UseSqlite(Configuration.GetConnectionString("Default"));
    }

    public DbSet<Cigars> Cigars { get; set; }
}

public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationContext>
{
    ApplicationContext IDesignTimeDbContextFactory<ApplicationContext>.CreateDbContext(string[] args)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();

        var builder = new DbContextOptionsBuilder<ApplicationContext>();
        var connectionString = configuration.GetConnectionString("Default");

        builder.UseSqlite(connectionString);

        return new ApplicationContext(builder.Options,configuration);
    }
}