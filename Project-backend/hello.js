const express = require("express");
const router = express.Router();
const app = express();

const porta = 3333;

function showHello(request, response){
    response.send("Hello, world!!")
}

function showPort(){
    console.log("Server" ,porta);
}

app.use(router.get('/hello', showHello))
app.listen(porta, showPort);