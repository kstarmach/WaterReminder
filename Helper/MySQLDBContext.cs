using Microsoft.EntityFrameworkCore;

namespace WaterReminder;

public class MySQLDBContext : DbContext
{
    public DbSet<User> User { get; set; }
    public DbSet<DrinkLog> DrinkLog { get; set; }
    public DbSet<DrinkType> DrinkTypes { get; set; }
    public MySQLDBContext(DbContextOptions<MySQLDBContext> options) : base(options) { }
}