// library iimports.
const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
