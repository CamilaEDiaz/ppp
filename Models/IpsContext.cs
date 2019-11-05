using Microsoft.EntityFrameworkCore;
namespace Practica.Models
{
public class IpsContext : DbContext
{
public IpsContext(DbContextOptions<IpsContext> options) :
base(options)
{
}
public DbSet<IpsItem> IpsItems { get; set; }
}
}