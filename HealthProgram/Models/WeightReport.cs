using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Models
{
    public class WeightReport
    {
        public WeightReport() { DateReport = DateTime.Now; }
        [Key]
        public int Id { get; set; }

        [ForeignKey("Person")]
        public int PersonId { get; set; }

        [DataType(DataType.Date)]
        public DateTime DateReport { get; set; }

        public decimal WeightMeasure { get; set; }
    }

}
