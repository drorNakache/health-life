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
    public class WeightReportsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public WeightReportsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/WeightReports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WeightReport>>> GetWeightReport()
        {
            return await _context.WeightReport.ToListAsync();
        }

        // GET: api/WeightReports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WeightReport>> GetWeightReport(int id)
        {
            var weightReport = await _context.WeightReport.FindAsync(id);

            if (weightReport == null)
            {
                return NotFound();
            }

            return weightReport;
        }

        // PUT: api/WeightReports/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWeightReport(int id, WeightReport weightReport)
        {
            if (id != weightReport.Id)
            {
                return BadRequest();
            }

            _context.Entry(weightReport).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeightReportExists(id))
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

        // POST: api/WeightReports
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WeightReport>> PostWeightReport(WeightReport weightReport)
        {
            _context.WeightReport.Add(weightReport);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWeightReport", new { id = weightReport.Id }, weightReport);
        }

        // DELETE: api/WeightReports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWeightReport(int id)
        {
            var weightReport = await _context.WeightReport.FindAsync(id);
            if (weightReport == null)
            {
                return NotFound();
            }

            _context.WeightReport.Remove(weightReport);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WeightReportExists(int id)
        {
            return _context.WeightReport.Any(e => e.Id == id);
        }
    }
}
