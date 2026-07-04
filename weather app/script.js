// Default city on page load
// Load weather data for Delhi when the page first appears.
loadWeather('Delhi');

// Handle search form submission
// Prevent default reload and fetch the entered city instead.
document.getElementById('header-search').addEventListener('submit', function(e) {
  e.preventDefault();
  const searchInput = document.querySelector('#header-search input[type="search"]');
  const city = searchInput.value.trim();
  if (city) {
    loadWeather(city);
    searchInput.value = '';
  }
});

// Fetch weather data from the API for the given city name
function loadWeather(city) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=36b4323ad9794c9fb39172539263006&q=${city}`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.current.temp_c;
      const feelsLike = data.current.feelslike_c;
      const condition = data.current.condition.text;
      const location = data.location.name;
      const humidity = data.current.humidity;
      const windSpeed = data.current.wind_kph;
      const windDirection = data.current.wind_dir;
      const pressure = data.current.pressure_mb;
      const visibility = data.current.vis_km;
      const uvIndex = data.current.uv;
      
      // Update weather details section
      // Each row in the details table gets the corresponding API value.
      document.getElementById('location').textContent = `Location: ${location}`;
      document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
      document.getElementById('feelsLike').textContent = `Feels Like: ${feelsLike}°C`;
      document.getElementById('condition').textContent = `Condition: ${condition}`;
      document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
      document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} km/h`;
      document.getElementById('windDirection').textContent = `Wind Direction: ${windDirection}`;
      document.getElementById('pressure').textContent = `Pressure: ${pressure} mb`;
      document.getElementById('visibility').textContent = `Visibility: ${visibility} km`;
      document.getElementById('uvIndex').textContent = `UV Index: ${uvIndex}`;
      
      // Update city heading and card display
      // The summary cards at the top show the latest city values.
      document.getElementById('city-heading').textContent = location;
      document.getElementById('search-temp').textContent = `${temperature}°C`;
      document.getElementById('search-condition').textContent = condition;
      document.getElementById('search-humidity').textContent = `${humidity}%`;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('City not found. Please try another city.');
    });
}