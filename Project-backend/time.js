const express = require("express");
const router = express.Router()
const app = express();

const porta = 3333;

function showHour(request, response){
    const date = new Date();
    const time = date.toLocaleDateString('pt-BR')
    response.send(hour)
}

function showPort(){
    console.log("Server" ,porta);
}

app.use(router.get('/hour', showHour))
app.listen(porta, showPort);