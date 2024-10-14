function updateDateTime() {
    const dateTimeElement = document.getElementById('DateTime');
    const now = new Date();
    
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    dateTimeElement.textContent = `${date}  ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();