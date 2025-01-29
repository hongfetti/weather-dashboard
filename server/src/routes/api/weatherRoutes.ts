import { Router } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// localhost3001/api/weather/
// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  console.log(req) 
  res({})
  // TODO: GET weather data from city name
  // TODO: save city to search history
});

// TODO: GET search history
// localhost3001/api/weather/history
// router.get('/history', async (_req: Request, res: Response) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});

export default router;
