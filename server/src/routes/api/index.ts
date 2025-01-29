import { Router } from 'express';
const router = Router();

import weatherRoutes from './weatherRoutes.js';

// localhost3001/api/weather
router.use('/weather', weatherRoutes);

export default router;
