import { Schema, model, models } from 'mongoose';

const pastriesSchema = new Schema({}, { collection: 'pastries' });

const Pastries = models.Pastries || model('Pastries', pastriesSchema);

export default Pastries;
