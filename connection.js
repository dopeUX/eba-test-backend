require('dotenv').config({path:'.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(express.json());
const options = {
    useNewUrlParser:true,
}

const connect = async() =>{
    const connection = await mongoose.connect(process.env.MONGO_DB_EBA_TEST, options).then(
        app.listen(process.env.PORT|3001, ()=>{
           console.log('server started'); 
        })
    ).then(()=>{
        console.log('database connected');
    });

    return connection;
}

const mongoConnect = connect();

module.exports = {
    app, express, router, mongoConnect, mongoose
};

app.use(cors());
