import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
 latitude: number,
 longitude: number,
}
// TODO: Define a class for the Weather object


// TODO: Complete the WeatherService class
class WeatherService implements Coordinates {
  name: string;
  latitude: number;
  longitude: number;

  constructor (
    name: string,
    latitude: number,
    longitude: number,
  )

  }
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
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
  const getWeatherForCity = async (city: string) => {
  console.log(city)

  const response = await fetch(`${this.baseURL}/data/2.5/weather?q=${city}&appid=${this.apiKey}`)

 const todayForecast = await response.json()
  }
  
// 5-day forecast:
//  const response2 = await fetch(`${this.baseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)

export default new WeatherService();
