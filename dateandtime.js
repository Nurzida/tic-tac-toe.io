function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    dateTimeElement.innerHTML = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display immediately