$(document).ready(function () { // Start code when DOM is fully loaded

    $("#calculate").click(function () { // Start function when user clicks calculate button

        // Get values
        let hours = $("#Hours").val();
        let rate = $("#HourlyRate").val();

        // Convert to numbers
        hours = parseFloat(hours);
        rate = parseFloat(rate);

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid number of hours.");
            return;
        }

        // Calculate total
        let total = hours * rate;

        // Display result
        $("#TotalCost").val(total.toFixed(2));
    });
});
