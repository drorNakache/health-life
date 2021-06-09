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
    [Route("Person/")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public PersonController(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;

        }
        [Route("Get/{ID}")]
        [HttpGet]
        public IActionResult Get(string ID)
        {
            try
            {
                var result = _dbContext.Set<Person>().FirstOrDefault(x => x.PersonId == ID);
                return Ok(result);
                
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [Route("Getperson")]
        [HttpGet]
        public IActionResult Getperson([FromBody] Person person)
        {
            try
            {
                var result = _dbContext.Set<Person>().FirstOrDefault(x => x.Id == person.Id);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [Route("create")]
        [HttpPost]
        public  IActionResult Create([FromBody] Person person)
        {
            try
            {
                //var result = _dbContext.Set<Person>().FirstOrDefault(x => x.Id == ID);
                //return Ok(result);


                _dbContext.Set<Person>().Add(person);
                _dbContext.SaveChanges();
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }



        [Route ("update")]
        [HttpPut]
        public IActionResult Update([FromBody] Person person  )
        {
            try
            {
                var result = _dbContext.Set<Person>().FirstOrDefault(x => x.Id == person.Id );
                result.Height = person.Height;
                result.Weight = person.Weight;
                
                _dbContext.SaveChanges();

                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

     

    }
}
