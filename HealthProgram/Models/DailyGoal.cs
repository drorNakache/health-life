using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Models
{
    public class DailyGoal
    {

        [Key]
        public int Id { get; set; }
        [ForeignKey("Person")]
        public string PersonId { get; set; }

        public DateTime CurrentDate { get; set; }

        public virtual Meal BreakFast { get; set; }
        public virtual Meal Launch { get; set; }
        public virtual Meal Dinner { get; set; }
        public virtual Meal Snacks { get; set; }



    }
}
