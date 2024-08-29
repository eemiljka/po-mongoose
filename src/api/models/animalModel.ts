import {model, Schema} from 'mongoose';
import {Animal, AnimalModel} from '../../types/Animal';

const animalSchema = new Schema<Animal>({
  animal_name: {type: String, required: true, unique: true, minlength: 2},
  species: {
    type: Schema.Types.ObjectId,
    ref: 'Species',
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
    max: Date.now(),
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

animalSchema.statics.findBySpecies = function (
  species_name: string,
): Promise<Animal[]> {
  return this.aggregate([
    {
      $lookup: {
        from: 'species',
        localField: 'species',
        foreignField: '_id',
        as: 'species_info',
      },
    },
    {
      $match: {
        'species_info.species_name': species_name,
      },
    },
  ]);
};

//  return this.find({species: species_name}).populate('species');

export default model<Animal, AnimalModel>('Animal', animalSchema);
