const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));

// Routes
app.use('/',indexRoutes);


app.listen(app.get('port'),()=>{
    console.log("Servidor corriendo en puerto 3000");
})