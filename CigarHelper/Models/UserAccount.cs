using Microsoft.AspNetCore.Identity;

namespace CigarHelper.Models;

public class UserAccount:IdentityUser
{
    public string? Initials { get; set; }
}