import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { Router } from 'express';
const app = express();

dotenv.config();
connectDB();
app.use(express.json)

app.use('/api/user', Router)
app.get('/', async (req, res) => {
    res.send("hello kalvium")
});
app.listen(5000, async () =>{
    console.log("Server is running at http://localhost:5000")
})