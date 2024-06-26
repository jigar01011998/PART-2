import axios from "axios";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getInfo = (city) => {
  if (!apiKey) {
    console.error("OpenWeatherMap API key is missing.");
    return Promise.reject("OpenWeatherMap API key is missing.");
  }

  console.log("City:", city);
  console.log("API Key:", apiKey);

  return axios
    .get(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw error;
    });
};

export default { getInfo };
