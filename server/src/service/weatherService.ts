import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
 latitude: number,
 longitude: number,
}

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: string;
  icon: string;
  iconDescription: string;
  tempF: number;
  windSpeed: number;
  humidity: number;

  constructor (
    city: string,
    date: string,
    icon: string,
    iconDescription: string,
    tempF: number,
    windSpeed: number,
    humidity: number,
  ) {
    this.city = city;
    this.date = date;
    this.icon = icon;
    this.iconDescription = iconDescription;
    this.tempF = tempF;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
  }
}

// TODO: Complete the WeatherService class
 // TODO: Define the baseURL, API key, and city name properties
class WeatherService {
  baseURL: string;
  apiKey: string;

  constructor (
    baseURL: string,
    apiKey: string,

  ) {

    this.baseURL = baseURL;
    this.apiKey= apiKey

  }
  
 
  // TODO: Create fetchLocationData method
  private async fetchLocationData(city: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/data/2.5/weather?q=${city}&appid=${this.apiKey}`
      )
      
      const location = await response.json();

      const locationData: Coordinates = {
        latitude: location.latitude,
        longitude: location.longitude
      }
      return locationData

    } catch (err) {
      console.log('Error', err)
      return err;
    }
  }

  private async fetchWeatherData(coordinates: Coordinates) {
  try {
    const response = await fetch(
      `${this.baseURL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`
    )
  } catch (err) {
    console.log('Error', err)
      return err;
    }
  }
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {
  //   const destructuredLocation: Coordinates = {
  //     latitude: , 
  //     longitude: 
  //   }
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
  // const getWeatherForCity = async (city: string) => {
  // console.log(city)

  // const response = await fetch(`${this.baseURL}/data/2.5/weather?q=${city}&appid=${this.apiKey}`)

  // const todayForecast = await response.json()
  
}
// 5-day forecast:
//  const response2 = await fetch()

export default new WeatherService();
