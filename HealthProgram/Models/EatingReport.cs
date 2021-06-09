using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Models
{
    public class EatingReport
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("DailyGoal")]
        public int DailyGoalId { get; set; }

        [ForeignKey("Person")]
        public string PersonId { get; set; }

        public DateTime EatingDate { get; set; }
        public DateTime ReportDate { get; set; }
        public virtual List<Food> FoodsReport { get; set; }

        public MealType MealType { get; set; }

    }
}
