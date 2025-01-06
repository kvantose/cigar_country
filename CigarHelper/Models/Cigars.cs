using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace CigarHelper.Models;

public class Cigars
{
    [Key]
    public long Id { get; set; }
}