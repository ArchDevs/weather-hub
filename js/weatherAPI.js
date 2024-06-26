let TOKEN = "YOUR_API_KEY_HERE";

export const fetchWeatherData = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${TOKEN}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
