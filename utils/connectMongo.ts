import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

export const connectMongo = async () => {
    console.log('Connecting to MongoDB');

    const connection = await mongoose
        .connect(MONGO_URI as string)
        .catch((err) => console.log('Erreur de connection a la BDD' + err));

    console.log('MongoDB Connected');
    
    return connection;
};
