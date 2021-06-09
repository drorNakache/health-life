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
    [Route("PersonWeightReport")]
    [ApiController]
    public class PersonWeightReportController : ControllerBase
    {
        private ApplicationDbContext _dbContext;
        public PersonWeightReportController(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;

        }

        // GET: list of person goals. how i get id from body or url
        [HttpGet("GetAll")]
        public IActionResult GetAll(string ID)
        {
            try
            {
                var result = _dbContext.Set<WeightReport>().GroupBy(x => x.PersonId == ID);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // GET WeightReport/5
        [HttpGet("{id}")]
        public IActionResult Get(int ID)
        {
            try
            {
                var result = _dbContext.Set<WeightReport>().FirstOrDefault(x => x.Id == ID);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // POST  WeightReport/
        [HttpPost]

        public IActionResult Create([FromBody] WeightReport WeightReport)
        {
            try
            {
                _dbContext.Set<WeightReport>().Add(WeightReport);
                _dbContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // PUT WeightReport/5
        [HttpPut("{id}")]


        public IActionResult Update([FromBody] WeightReport WeightReport)
        {
            try
            {
                var result = _dbContext.Set<WeightReport>().FirstOrDefault(x => x.Id == WeightReport.Id);
                result.WeightMeasure = WeightReport.WeightMeasure;
                result.WeightMeasure = WeightReport.WeightMeasure;

                _dbContext.SaveChanges();

                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // DELETE WeightReport/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int ID)
        {
            try
            {
                var result = _dbContext.Set<WeightReport>().FirstOrDefault(x => x.Id == ID);
                _dbContext.Set<WeightReport>().Remove(result);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
