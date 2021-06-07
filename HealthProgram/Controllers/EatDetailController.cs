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
    public class EatDetailController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EatDetailController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/EatDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EatDetail>>> GetEatDetail()
        {
            return await _context.EatDetail.ToListAsync();
        }

        // GET: api/EatDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EatDetail>> GetEatDetail(int id)
        {
            var eatDetail = await _context.EatDetail.FindAsync(id);

            if (eatDetail == null)
            {
                return NotFound();
            }

            return eatDetail;
        }

        // PUT: api/EatDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEatDetail(int id, EatDetail eatDetail)
        {
            if (id != eatDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(eatDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EatDetailExists(id))
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

        // POST: api/EatDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EatDetail>> PostEatDetail(EatDetail eatDetail)
        {
            _context.EatDetail.Add(eatDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEatDetail", new { id = eatDetail.Id }, eatDetail);
        }

        // DELETE: api/EatDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEatDetail(int id)
        {
            var eatDetail = await _context.EatDetail.FindAsync(id);
            if (eatDetail == null)
            {
                return NotFound();
            }

            _context.EatDetail.Remove(eatDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EatDetailExists(int id)
        {
            return _context.EatDetail.Any(e => e.Id == id);
        }
    }
}
