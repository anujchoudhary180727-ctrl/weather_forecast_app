# Weather App Documentation

## Overview
This Weather App is a simple web application that fetches and displays current weather information for a searched city. It also provides a summary of weather conditions for a set of common locations.

## Features
- Search for a city and show its current weather including temperature, humidity, wind speed, pressure, visibility, and UV index.
- Display a summary header with the current temperature, weather condition, and humidity for the selected city.
- Show a responsive table with weather conditions for common places.
- Use Bootstrap for responsive layout and a clean interface.

## Files
- `index.html` - Main HTML page with app structure, navigation, search area, summary cards, and weather tables.
- `style.css` - Custom CSS file for low-impact app styling and utility classes.
- `script.js` - JavaScript logic for fetching weather data from the API and updating the page.
- `README.md` - Project and intern details.
- `DOCUMENTATION.md` - This file.

## How it works
1. The page loads and calls `loadWeather('Delhi')` to display a default city weather.
2. When the search form is submitted, the app prevents the default browser refresh and calls `loadWeather(city)`.
3. The `loadWeather` function requests current weather data from the Weather API.
4. After the API response arrives, the app updates the page elements with the latest weather values.

## Usage
- Open `index.html` in a browser.
- Type a city name into the search box.
- Click `Search` to load the weather for that city.
- The weather summary cards and detail table update automatically.

## Notes
- The app uses a public weather API endpoint in `script.js`.
- If the city is not found, the user sees an alert message.
- Custom CSS is intentionally minimal to preserve the Bootstrap-based layout.
