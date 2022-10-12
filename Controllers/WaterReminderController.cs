using Microsoft.AspNetCore.Mvc;

namespace WaterReminder.Controllers;

[ApiController]
[Route("[controller]")]
public class WaterReminderController : ControllerBase
{
    private static int Cups = 5;

    [HttpPost]
    public IActionResult Post()
    {
        Cups += 1;
        return Ok(Cups);
    }

    [HttpPut("decrease")]
    public IActionResult Put()
    {
        Cups -= 1;
        return Ok(Cups);
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(Cups);
    }
}