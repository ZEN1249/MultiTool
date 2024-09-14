function updateDateTime() {
    const dateTimeElement = document.getElementById('DateTime');
    const now = new Date();
    
    // Get current date and time
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    dateTimeElement.textContent = `${date}  ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();