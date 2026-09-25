

const pastDate = new Date(2024, 5, 30, 0, 0);

function updateTimer() {
    const now = new Date();
    const difference = now - pastDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const displayText =
        `${days} days, ${hours} hours, and ${minutes} minutes`;

    const element = document.getElementById("counter");

    if (element) {
        element.textContent = displayText;
    }
}

updateTimer();
setInterval(updateTimer, 60000);
