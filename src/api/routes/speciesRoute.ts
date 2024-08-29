import express from 'express';
import {
  deleteSpecies,
  getSingleSpecies,
  getSpecies,
  postSpecies,
  putSpecies,
  getByArea
} from '../controllers/speciesController';
import { addImaageToSpecies } from '../../middlewares';

const router = express.Router();

router.route('/').post(addImaageToSpecies, postSpecies).get(getSpecies);

router
  .route('/:id')
  .get(getSingleSpecies)
  .put(putSpecies)
  .delete(deleteSpecies);

  router.post('/area', getByArea);

export default router;
