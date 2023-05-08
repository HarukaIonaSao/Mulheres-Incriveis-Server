const express = require("express");

const app = express();

const porta = 3333;

function showPort(){
    console.log("Server" ,porta);
}

app.listen(porta, showPort);