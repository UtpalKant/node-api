// library iimports.
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// using mongoose.
const mongoose = require('mongoose');

// using body parser.
app.use(bodyParser.urlencoded({ extended: false }));

// using cookie-parser.
app.use(cookieParser());

// custom imports.
const router = require('./routes/router');
require('dotenv').config();
const config = require('./config')[process.env.NODE_ENV || 'dev'];

// setting mongoose orm
mongoose.connect(config.mongodbClusterUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(_=>{
    // calls routes/router middleware.
    app.use(router);
    
    // server listening.
    let port = process.env.PORT || 80
    app.listen(port, ()=>{
        console.log(`node started at ${port}`);
    });
})
.catch(err=>{
    console.log('mongodb cluster not connected', err);
    
});
