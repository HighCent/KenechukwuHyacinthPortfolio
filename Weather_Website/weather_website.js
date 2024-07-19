const apiKey = '48813dece6b3c824e7dd1f43a3009c3e'; // Your actual OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found.');
                return;
            }

            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
