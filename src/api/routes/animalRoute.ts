import express from 'express';
import {
  deleteAnimal,
  getSingleAnimal,
  getAnimal,
  postAnimal,
  putAnimal,
} from '../controllers/animalController';

const router = express.Router();

router.route('/').post(postAnimal).get(getAnimal);

router.route('/:id').get(getSingleAnimal).put(putAnimal).delete(deleteAnimal);

export default router;
