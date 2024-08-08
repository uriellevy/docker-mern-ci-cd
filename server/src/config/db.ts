import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db: Db;

export const connectDB = async (): Promise<void> => {
    try {
        const client = new MongoClient(process.env.MONGO_URI as string);

        await client.connect();
        db = client.db('docker-app');
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export const getDB = (): Db => db;