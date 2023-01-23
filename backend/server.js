import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', true)

mongoose
  .connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
    useUnifiedTopology: true,
    })
  .then(() => {
    console.log('connected to db');
    console.log(process.env.MONGODB_URI);
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
