const axios = require('axios')

const getWeather = async (city, country) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&appid=${process.env.WEATHER_API_KEY}&units=metric&lang=pt_br`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (e) {
    throw new Error('There was an error searching for the weather forecast')
  }
}

module.exports = getWeather
