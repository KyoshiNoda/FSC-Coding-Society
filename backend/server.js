const express = require('express');
const app = express();

app.listen(3001, () =>{
  console.log("listening");
});

app.get('/', (req,res) =>{
  res.send("hello")
});

app.get('/api/test', (req,res) =>{
  res.send("this is working with the local host");
});