import mongoose from "mongoose";
import {Point} from 'geojson';
import { Category } from "./Category";

type Species = {
  species_name: string;
  image: string;
  category: mongoose.Types.ObjectId | Category;
  location: Point;
};

export {Species};
