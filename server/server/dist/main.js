"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const MatieresController_1 = require("./MatieresController");
let app = express();
app.use(cors());
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
 */
app.use(MatieresController_1.router);
// var MatiereController = require('./MatiereController.js');
// app.use('/matieres', MatiereController);
// var RepairController = require('./RepairController.js');
// app.use('/repairs',RepairController);
// module.exports = app;
app.listen(3000);
