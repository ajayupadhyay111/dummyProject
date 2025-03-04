import express, { application } from 'express'
import {config} from 'dotenv'
import connectDB from './utils/db.js';
config();

const app = express();


app.get('/',(req,res)=>{res.end("hello world")});

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log("server is running on port ",process.env.PORT);
})