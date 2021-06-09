using HealthProgram.Data;
using HealthProgram.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HealthProgram.Controllers
{
    [Route("PersonGoals")]
    [ApiController]
    public class GoalsController : ControllerBase
    {
        private ApplicationDbContext _dbContext;
        public GoalsController(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;

        }
        // GET: api/PaymentDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DailyGoal>>> GetDailyGoals()
        {
            return await _dbContext.DailyGoal.ToListAsync();
        }
        // GET: list of person goals. how i get id from body or url
        [HttpGet("GetAll")]
        public IActionResult GetAll(string ID)
        {
            try
            {
                var result = _dbContext.Set<DailyGoal>().GroupBy(x => x.PersonId == ID);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // GET goals/5
        [HttpGet("{id}")]
        public IActionResult Get(int ID)
        {
            try
            {
                var result = _dbContext.Set<DailyGoal>().FirstOrDefault(x => x.Id == ID);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // POST api/<GoalsController>
        [HttpPost]
        public IActionResult Create([FromBody] DailyGoal dailyGoal)
        {
            try
            {
                _dbContext.Set<DailyGoal>().Add(dailyGoal);
                _dbContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // PUT api/<GoalsController>/5
        [HttpPut("{id}")]


        public IActionResult Update([FromBody] DailyGoal dailyGoal)
        {
            try
            {
                var result = _dbContext.Set<DailyGoal>().FirstOrDefault(x => x.Id == dailyGoal.Id);
                result.BreakFast = dailyGoal.BreakFast ;
                result.Launch = dailyGoal.Launch;
                result.Dinner = dailyGoal.Dinner;
                result.Snacks = dailyGoal.Snacks;

                _dbContext.SaveChanges();

                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // DELETE api/<GoalsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int ID)
        {
            try
            {
                var result = _dbContext.Set<DailyGoal>().FirstOrDefault(x => x.Id == ID);
                _dbContext.Set<DailyGoal>().Remove(result);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
