const express = require("express");

const app = express()

app.use(express.json())

app.use((req, res, next)=>{
    res.header("Accessf-Control-Allow-Origin", "*")
    res.header("Accessf-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


module.exports = app;