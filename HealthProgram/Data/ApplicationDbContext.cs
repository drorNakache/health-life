using HealthProgram.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthProgram.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }
        public DbSet<EatDetail> EatDetail { get; set; }
        public DbSet<EatGoal> EatGoal { get; set; }
        public DbSet<DailyGoal> DailyGoal { get; set; }
        public DbSet<Person> Person { get; set; }
        public DbSet<EatingReport> EatingReport { get; set; }
        public DbSet<WeightReport> WeightReport { get; set; }

    }
}
