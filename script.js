// Countdown Timer for maintenance page
const timerElement = document.getElementById("timer");

// Set the date we're counting down to
const maintenanceEnd = new Date().getTime() + 3600 * 1000; // Example: 1 hour from now

// Update the countdown every 1 second
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = maintenanceEnd - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        timerElement.innerHTML = "We're back! Refresh the page.";
    }
}, 1000);
