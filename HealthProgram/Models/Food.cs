using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace HealthProgram.Models
{
    public class Food
    {
        public Food() { }
[Key]
        public int ID { get; set; }

        [Display(Name = "שם מאכל")]
        public string Name { get; set; }// שם מאכל

        [Display(Name = "קלוריות")]
        public float Calories { get; set; }// קלוריות

        [Display(Name = "פחמימות")]
        public float Carbohydrates { get; set; }// פחמימות

        [Display(Name = "שומנים")]
        public float Fats { get; set; }// שומנים

        [Display(Name = "מידה")]
        public float Unit { get; set; }//מידה
    }
}
