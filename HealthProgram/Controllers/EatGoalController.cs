using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HealthProgram.Data;
using HealthProgram.Models;

namespace HealthProgram.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EatGoalController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EatGoalController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/EatGoal
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EatGoal>>> GetEatGoal()
        {
            return await _context.EatGoal.ToListAsync();
        }

        // GET: api/EatGoal/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EatGoal>> GetEatGoal(int id)
        {
            var eatGoal = await _context.EatGoal.FindAsync(id);

            if (eatGoal == null)
            {
                return NotFound();
            }

            return eatGoal;
        }

        // PUT: api/EatGoal/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEatGoal(int id, EatGoal eatGoal)
        {
            if (id != eatGoal.Id)
            {
                return BadRequest();
            }

            _context.Entry(eatGoal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EatGoalExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EatGoal
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EatGoal>> PostEatGoal(EatGoal eatGoal)
        {
            _context.EatGoal.Add(eatGoal);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEatGoal", new { id = eatGoal.Id }, eatGoal);
        }

        // DELETE: api/EatGoal/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEatGoal(int id)
        {
            var eatGoal = await _context.EatGoal.FindAsync(id);
            if (eatGoal == null)
            {
                return NotFound();
            }

            _context.EatGoal.Remove(eatGoal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EatGoalExists(int id)
        {
            return _context.EatGoal.Any(e => e.Id == id);
        }
    }
}
