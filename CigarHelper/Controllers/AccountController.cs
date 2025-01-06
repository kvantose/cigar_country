using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CigarHelper.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CigarHelper.Controllers;

[Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly UserManager<UserAccount> userManager;
    private readonly SignInManager<UserAccount> signInManager;
    private readonly IConfiguration configuration;

    public AccountController(
        UserManager<UserAccount> userManager,
        SignInManager<UserAccount> signInManager,
        IConfiguration configuration)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
        this.configuration = configuration;
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        if (!ModelState.IsValid)
        {
            var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage));
            return BadRequest(errors);
        }

        var userAccount = new UserAccount { Email = model.Email, UserName = model.UserName };
        var result = await userManager.CreateAsync(userAccount, model.Password);
        if (result.Succeeded)
        {
            var token = await GetTokenAsync(userAccount);

            return Ok(new { token });
        }

        return BadRequest(result.Errors.Select(e => e.Description));
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Auth([FromBody] TokenRequest tokenRequest)
    {
        var userAccount = tokenRequest.Login.Contains('@') ?
            await userManager.FindByEmailAsync(tokenRequest.Login) :
            await userManager.FindByNameAsync(tokenRequest.Login);

        if (userAccount == null)
        {
            return NotFound(new { message = $"User with login {tokenRequest.Login} not found!" });
        }

        var passValided = await userManager.CheckPasswordAsync(userAccount, tokenRequest.Password);

        if (!passValided)
        {
            return UnprocessableEntity(new { message = "Invalid username or password." });
        }

        var token = await GetTokenAsync(userAccount);

        return Ok(token); 
    }

    private async Task<string> GetTokenAsync(UserAccount userAccount)
    {
        var principal = await signInManager.CreateUserPrincipalAsync(userAccount);

        var identity = (ClaimsIdentity)principal.Identity;

        if (identity == null)
        {
            return null;
        }

        var now = DateTime.UtcNow;
        // created JWT-token
        var jwt = new JwtSecurityToken(
                notBefore: DateTime.UtcNow,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(int.Parse(configuration["Jwt:LifeTime"]))),
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(
                        Encoding.ASCII.GetBytes(configuration["Jwt:Key"])),
                    SecurityAlgorithms.HmacSha256));

        var token = new JwtSecurityTokenHandler().WriteToken(jwt);

        return token;
    }
}