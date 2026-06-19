
import express from 'express';
import connectDB from './db.js';

const app = express();

//  THIS is the line that actually executes connection!
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});