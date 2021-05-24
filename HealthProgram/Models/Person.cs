using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Models
{
    public class Person
    {
        public Person()
        {

        }
        public Person( string privateName, string lastName, double height, double weight, string dateOfBirth)
        {
            PrivateName = privateName;
            LastName = lastName;
            Height = height;
            Weight = weight;
            DateOfBirth = dateOfBirth;
        }

        [Key]
        public int Id { get; set; }
        [ForeignKey("ApplicationUser")]
        public string Username { get; set; }
        public string PrivateName { get; set; }
        public string LastName { get; set; }

        public double Height { get; set; }
        public double Weight { get; set; }
        public string DateOfBirth { get; set; }



    }
}
