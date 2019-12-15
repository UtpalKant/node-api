// library iimports.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// using mongoose.
const mongoose = require('mongoose');

// using body parser.
app.use(bodyParser.urlencoded({ extended: false }))

// custom imports.
const router = require('./routes/router');
const dotenv = require('dotenv').config();
const config = require('./config')[process.env.NODE_ENV];

// setting mongoose orm
mongoose.connect(config.mongodbClusterUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(_=>{
    // calls routes/router middleware.
    app.use(router);
    
    // server listening.
    app.listen(process.env.PORT, ()=>{
        console.log('node started at 8080');
    });
})
.catch(err=>{
    console.log('mongodb cluster not connected', err);
    
});
