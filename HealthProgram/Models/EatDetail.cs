using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Models
{
    public class EatDetail
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Person")]
        public string PersonId { get; set; }
        public string FoodName { get; set; }
        public MealType MealType { get; set; }
        public DateTime EatDate { get; set; }
        public float Calories { get; set; }// קלוריות
        public float Unit { get; set; }//מידה
    }
}
