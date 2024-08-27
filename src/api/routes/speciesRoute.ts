import express from 'express';
import {
  deleteSpecies,
  getSingleSpecies,
  getSpecies,
  postSpecies,
  putSpecies,
} from '../controllers/speciesController';
import { addImaageToSpecies } from '../../middlewares';

const router = express.Router();

router.route('/').post(addImaageToSpecies, postSpecies).get(getSpecies);

router
  .route('/:id')
  .get(getSingleSpecies)
  .put(putSpecies)
  .delete(deleteSpecies);

export default router;
