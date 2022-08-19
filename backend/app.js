import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './app/configs/connectDB.js';

const app = express();
dotenv.config();

app.use(express.json());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


// Connection Start
const DB_URL = process.env.DB_URL;
connectDB(DB_URL);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server Start!!')
});