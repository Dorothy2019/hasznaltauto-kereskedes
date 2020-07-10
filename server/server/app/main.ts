import express = require('express');
import cors = require('cors');
import { router } from './MatieresController';
let app = express();
app.use(cors());

/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
 */ 
app.use(router);
// var MatiereController = require('./MatiereController.js');
// app.use('/matieres', MatiereController);
// var RepairController = require('./RepairController.js');
// app.use('/repairs',RepairController);


// module.exports = app;


app.listen(3000);