// import dayjs, { type Dayjs } from 'dayjs';
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

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
  // private city = '';

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
      console.log(location)

      const locationData: Coordinates = {
        lat: location.coord.lat,
        lon: location.coord.lon,
        name: location.name,
        country: location.sys.country,
      }
      return locationData

    } catch (err) {
      console.log('Error', err)
      return err;
    }
  }

  // private async fetchWeatherData(location: Coordinates) {
  // try {
  //   const response = await fetch(
  //     `${this.baseURL}/data/2.5/forecast?lat=${response.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`
  //   )
  // } catch (err) {
  //   console.log('Error', err)
  //     return err;
  //   }
  // }
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {
  //   if (!locationData) {
  //     throw new Error("City not found");
  //   }
  //   return { lat: locationData.lat, lon: locationData.lon, name: locationData.name, country: locationData.country }
  // }
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  getWeatherForCity = async (city: string) => {

    const location: Coordinates = await this.fetchLocationData(city) as Coordinates
    // console.log(location)



    const weatherInfo = await fetch(
      `${this.baseURL}/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${this.apiKey}`
    )
    const info = await weatherInfo.json();


    const currentWeather = new Weather(info.name, info.date, info.tempF, info.windSpeed, info.humidity, info.icon, info.iconDescription)
    console.log(currentWeather)

    // console.log(info)
    // return [currentWeather, ...forecastArray]
  }
}

// 5-day forecast:
//  const response2 = await fetch()

export default new WeatherService();
