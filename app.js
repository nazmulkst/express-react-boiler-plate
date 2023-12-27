// Basic Library Import
// const express = require('express');
// const router = require('./src/routes/api');
// const app = new express();
// const bodyParser = require('body-parser')
// import { Express } from 'express';
const express = require('express')
const router = require('./src/route/api')
const app = new express();
const bodyParser = require('body-parser')
// import router from './src/route/api';
// import bodyParser from 'body-parser';


// Security Middleware Library Import
const rateLimit = require('express-rate-limiter');
const helmet = require('helmet');
const ExpressMongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp');
const xss = require('xss-clean');
const cors = require('cors');

// import expressRateLimiter from 'express-rate-limiter';
// import helmet from 'helmet';
// import ExpressMongoSanitize from 'express-mongo-sanitize';
// import hpp from 'hpp';
// import { clean } from 'xss-clean/lib/xss';
// import { CorsOptions } from 'cors';

// Database Library Import
const mongoose = require('mongoose')
// import mongoose from 'mongoose';
// import { bodyParser } from 'body-parser';
// import { helmet } from 'helmet';


// Security Middleware Implement

app.use(cors());
app.use(helmet());
app.use(ExpressMongoSanitize());
app.use(hpp());
app.use(xss())

// Body Parser Implent
app.use(bodyParser.json())

// Request Rate Limit
// const limiter = rateLimit({windowMs: 15 * 60 * 100, max: 3000});
// app.use(limiter);



// Mongo DB Database Connection

const url = "mongodb://localhost:27017/inventory";
// const option = {autoIndex: true};

// mongoose.connect(url, option, function(error){
//     console.log("Connection Successfully established")
//     console.log(error);
// })


// Frontend Tagging
app.use(express.static('client/dist'));
app.get("*", function(req, res){
    req.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
})

// Managing Backend API Routing
app.use("/api/v1", router);

// Undefined Route Implement

// app.use("*", function(req, res){
//     res.status(404).json({status:"fail", data: "Not found"})
// })

module.exports = app;