import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
    const connectionUrl = process.env.DB_URI;
    try {
        await mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
    mongoose.set('strictQuery', false);
};

export default connectDB;
