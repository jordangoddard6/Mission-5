namespace Mission_5.Models
{
    public class CalculatorViewModel
    {
        public int Hours { get; set; }
        public decimal HourlyRate { get; set; } = 20; // Default hourly rate
        public decimal TotalCost { get; set; }
    }
}
