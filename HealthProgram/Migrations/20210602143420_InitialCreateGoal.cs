using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HealthProgram.Migrations
{
    public partial class InitialCreateGoal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EatGoal",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonId = table.Column<int>(type: "int", nullable: false),
                    FoodName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MealType = table.Column<int>(type: "int", nullable: false),
                    EatDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Calories = table.Column<float>(type: "real", nullable: false),
                    Unit = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EatGoal", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EatGoal");
        }
    }
}
