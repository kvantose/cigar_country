using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CigarHelper;

public class TokenRequest
{
    [Required(ErrorMessage = "")]
    [JsonPropertyName("login")]
    public string Login { get; set; }

    [Required(ErrorMessage = "")]
    [DataType(DataType.Password)]
    [JsonPropertyName("password")]
    public string Password { get; set; }
}