using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Models
{
    public class Meal
    {

        [Key]
        public int Id { get; set; }
       
        public MealType MealType { get; set; }
        public List<Food> Foods { get; set; } = new List<Food>();
    }

    public enum MealType { Breakfast,Launch,Dinner,Snacks}
}
