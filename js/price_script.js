// Add event listener to the window object for the load event
window.addEventListener("load", function() {
    // Add event listeners to inputs for real-time calculation
    document.getElementById("felnott").addEventListener("input", ticket_price);
    document.getElementById("gyerek").addEventListener("input", ticket_price);

    // Calculate ticket price
    function ticket_price() {
        // Get the values of the inputs and convert them to integers
        const felnottdb = parseInt(document.getElementById("felnott").value) || 0;
        const gyerekdb = parseInt(document.getElementById("gyerek").value) || 0;

        // Calculate total price
        const price = felnottdb * 2000 + gyerekdb * 1000;

        // Set the calculated price as the value of the "to_be_paid" input
        document.getElementById("to_be_paid").value = price + " Ft";
    }
});