import { Router } from 'express';
const router = Router();

import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';

// localhost3001/api
router.use('/api', apiRoutes);
// localhost3001/
router.use('/', htmlRoutes);

export default router;
