import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import TreeFallController from '../controllers/TreeFallController';

const treeFallRoutes = Router();
const upload = multer(uploadConfig);

treeFallRoutes.get('/show/:id', TreeFallController.show);
treeFallRoutes.get('/index', TreeFallController.index);
// treeFallRoutes.get('/eventType', TreeFallController.eventType);
treeFallRoutes.post(
  '/create',
  upload.array('images'),
  TreeFallController.create
);

export default treeFallRoutes;
