using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WaterReminder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrinkLogController : Controller
    {
        private MySQLDBContext _dbContext;

        public DrinkLogController(MySQLDBContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public IList<DrinkLog> Get()
        {
            return (this._dbContext.DrinkLog.Include(x => x.User).ToList());
        }
    }
}