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
    public class EatingReportsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EatingReportsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/EatingReports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EatingReport>>> GetEatingReport()
        {
            return await _context.EatingReport.ToListAsync();
        }

        // GET: api/EatingReports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EatingReport>> GetEatingReport(int id)
        {
            var eatingReport = await _context.EatingReport.FindAsync(id);

            if (eatingReport == null)
            {
                return NotFound();
            }

            return eatingReport;
        }

        // PUT: api/EatingReports/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEatingReport(int id, EatingReport eatingReport)
        {
            if (id != eatingReport.Id)
            {
                return BadRequest();
            }

            _context.Entry(eatingReport).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EatingReportExists(id))
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

        // POST: api/EatingReports
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EatingReport>> PostEatingReport(EatingReport eatingReport)
        {
            _context.EatingReport.Add(eatingReport);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEatingReport", new { id = eatingReport.Id }, eatingReport);
        }

        // DELETE: api/EatingReports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEatingReport(int id)
        {
            var eatingReport = await _context.EatingReport.FindAsync(id);
            if (eatingReport == null)
            {
                return NotFound();
            }

            _context.EatingReport.Remove(eatingReport);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EatingReportExists(int id)
        {
            return _context.EatingReport.Any(e => e.Id == id);
        }
    }
}
