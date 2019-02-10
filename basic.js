var express= require('express')
var mysql = require('mysql');
var app= express()

var cars= [
    {id:1, type:'Lexus'},
    {id:2, type:'Jaguar'},
    {id:3, type:'Porsche'},
    {id:4, type:'Ferrari'},
];

/*
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'carsDB'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.get("",function(res,req){
      connect.query("SELECT * FROM cars", function(error, rows, fields){
          if(error){
              console.log('Error in the query');
          }
          else {
              console.log('Sucessfull query');
              console.log(rows);
          }
      })
  })
*/
app.get('/', function(req,res){
    res.send("Im in the world");
})

app.get('/api/cars', function(req,res){
    res.send(cars);
})

app.listen(8000)