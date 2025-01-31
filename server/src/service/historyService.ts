import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

// TODO: Define a City class with name and id properties
class City {
  cityName: string;
  id: string;

  constructor(name: string, id: string) {
    this.cityName = name;
    this.id = id;
  }
}

// TODO: Complete the HistoryService class
class HistoryService {
//   TODO: Define a read method that reads from the db.json file
  private async read() {
    const initHistory = await fs.readFile('db/db.json', {
      flag: 'a+',
      encoding: 'utf8',

  });
  return JSON.parse(initHistory)
  }
  // TODO: Define a write method that writes the updated cities array to the db.json file
  private async write(cities: City[]) {
    return await fs.writeFile('db/db.json', JSON.stringify(cities, null, '\t'));
  }
  // TODO: Define a getCities method that reads the cities from the db.json file and returns them as an array of City objects
  async getCities() {
   return await this.read()
  }
  // TODO Define an addCity method that adds a city to the db.json file
  async addCity(city: City[]) {
    const cities = await this.read();
    const newCity = {name: city, id: uuidv4()};
    cities.push(newCity)
    await this.write(cities)
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the db.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
