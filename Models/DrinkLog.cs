using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WaterReminder;

public class DrinkLog
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [ForeignKey("UserId")]
    public virtual User User { get; set; }
    [ForeignKey("DrinkType")]
    public int Type { get; set; }
    public int Quantity { get; set; }
    public DateTime Date { get; set; }
}