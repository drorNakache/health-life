using HealthProgram.Data;
using HealthProgram.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Controllers
{
    [Route("PersonEatingReport")]
    [ApiController]
    public class PersonEatingReportController : ControllerBase
    {
        private ApplicationDbContext _dbContext;
        public PersonEatingReportController(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;

        }

        // GET: list of person goals. how i get id from body or url
        [HttpGet("GetAll")]
        public IActionResult GetAll(string ID)
        {
            try
            {
                var result = _dbContext.Set<EatingReport>().GroupBy(x => x.PersonId == ID);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // GET EatingReport/5
        [HttpGet("{id}")]
        public IActionResult Get(int ID)
        {
            try
            {
                var result = _dbContext.Set<EatingReport>().FirstOrDefault(x => x.Id == ID);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // POST  EatingReport/
        [HttpPost]
        public IActionResult Create([FromBody] EatingReport EatingReport)
        {
            try
            {
                _dbContext.Set<EatingReport>().Add(EatingReport);
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


        public IActionResult Update([FromBody] EatingReport EatingReport)
        {
            try
            {
                var result = _dbContext.Set<EatingReport>().FirstOrDefault(x => x.Id == EatingReport.Id);
                result.MealType = EatingReport.MealType;
                result.FoodsReport = EatingReport.FoodsReport;
                
                _dbContext.SaveChanges();

                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // DELETE EatingReport/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int ID)
        {
            try
            {
                var result = _dbContext.Set<EatingReport>().FirstOrDefault(x => x.Id == ID);
                _dbContext.Set<EatingReport>().Remove(result);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
