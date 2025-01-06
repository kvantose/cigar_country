using System.IO;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CigarHelper.Models;

public class IdentityContext : IdentityDbContext<UserAccount>
{
    protected readonly IConfiguration Configuration;

    public IdentityContext()
    {
    }

    public IdentityContext(DbContextOptions options)
    {
    }

    public IdentityContext(DbContextOptions options, IConfiguration configuration) : base(options)
    {
        Configuration = configuration;
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<UserAccount>().Property(s => s.Initials).HasMaxLength(10);
        // builder.Entity<UserRole>();
        

        builder.HasDefaultSchema("identity");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to sqlite database
        options.UseSqlite(Configuration.GetConnectionString("Default"));
    }
    
    DbSet<UserAccount> UserAccounts { get; set; }
    DbSet<UserRole> UserRoles { get; set; }
}

public class IdentityDbContextFactory : IDesignTimeDbContextFactory<IdentityContext>
{
    IdentityContext IDesignTimeDbContextFactory<IdentityContext>.CreateDbContext(string[] args)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();

        var builder = new DbContextOptionsBuilder<IdentityContext>();
        var connectionString = configuration.GetConnectionString("Default");

        builder.UseSqlite(connectionString);

        return new IdentityContext(builder.Options,configuration);
    }
}