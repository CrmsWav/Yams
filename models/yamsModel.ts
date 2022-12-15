import { Schema, model, models } from 'mongoose';

// Schema
const yamsSchema = new Schema({
    pastries: [{
        name: String,
        number: Number,
        order: Number,
    }],
});

// Model
const Yams = models.Yams || model('Yams', yamsSchema);

export default Yams;
