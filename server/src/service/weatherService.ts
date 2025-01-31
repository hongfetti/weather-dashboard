// import dayjs, { type Dayjs } from 'dayjs';
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: /*Dayjs*/ | string;
  tempF: number;
  windSpeed: number;
  humidity: number;
  icon: string;
  iconDescription: string;
  constructor(
    city: string,
    date: /*Dayjs*/ | string,
    tempF: number,
    windSpeed: number,
    humidity: number,
    icon: string,
    iconDescription: string
  ) {
    this.city = city;
    this.date = date;
    this.tempF = tempF;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.icon = icon;
    this.iconDescription = iconDescription;
  }
}

// TODO: Complete the WeatherService class
// TODO: Define the baseURL, API key, and city name properties
class WeatherService {
  private baseURL?: string;
  private apiKey?: string;

  constructor() {

    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';

  }
  // * Note: The following methods are here as a guide, but you are welcome to provide your own solution.
  // * Just keep in mind the getWeatherForCity method is being called in your
  // * 09-Servers-and-APIs/02-Challenge/Develop/server/src/routes/api/weatherRoutes.ts file

  // * the array of Weather objects you are returning ultimately goes to
  // * 09-Servers-and-APIs/02-Challenge/Develop/client/src/main.ts

  // TODO: Create fetchLocationData method
  private async fetchLocationData(city: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/data/2.5/weather?q=${city}&appid=${this.apiKey}`
      )
      const location = await response.json();
      return location

    } catch (err) {
      console.log('Error', err)
      return err;
    }
  }

  getWeatherForCity = async (city: string) => {

    const newWeatherData = await this.fetchLocationData(city)

    const currentWeather = new Weather(
      newWeatherData.name, 
      newWeatherData.dt, 
      // convert temp from kelvin to F
      Number(((newWeatherData.main.temp - 273.15) * 9/5 + 32).toFixed(1)), 
      newWeatherData.wind.speed, 
      newWeatherData.main.humidity, 
      newWeatherData.weather[0].icon, 
      newWeatherData.weather[0].description)

    const weatherInfo = await fetch(
      `${this.baseURL}/data/2.5/forecast?q=${city}&appid=${this.apiKey}`
    )
    const info = await weatherInfo.json();

    let filteredArray = info.list.filter((_: Weather, index: number) => index % 8 === 0)
    let forecastArray = filteredArray.map((day: any) => new Weather(
      info.city.name, 
      day.dt,
      // convert temp from kelvin to F
      Number(((day.main.temp - 273.15) * 9/5 + 32).toFixed(1)),
      day.wind.speed,
      day.main.humidity, 
      day.weather[0].icon, 
      day.weather[0].description
    ));
    console.log(filteredArray)

    return [currentWeather, ...forecastArray]
  }
}

export default new WeatherService();
