
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Attempt to connect to the database using the URI from the .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit the process if the connection fails
    process.exit(1); 
  }
};

export default connectDB;