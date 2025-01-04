using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CigarHelper;

public class RegisterModel
{
    [Required(ErrorMessage = "")]
    [JsonPropertyName("username")]
    public string UserName { get; set; }

    [Required(ErrorMessage = "")]
    [EmailAddress]
    [DataType(DataType.EmailAddress)]
    [JsonPropertyName("email")]
    public string Email { get; set; }

    [Required(ErrorMessage = "")]
    [DataType(DataType.Password)]
    [JsonPropertyName("password")]
    public string Password { get; set; }

    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "")]
    [JsonPropertyName("confirm_password")]
    public string ConfirmPassword { get; set; }
}