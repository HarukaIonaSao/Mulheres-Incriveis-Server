const express = require("express");
const router = express.Router()

const app = express();

const porta = 3333;

function showWoman(request, response){
    response.json({
        name:"Roberta Ribeiro",
        img: "https://github.com/harukaionasao.png",
        minibio: "Desenvolvedora fullstack | Acessibilidade"
    })
}

function showPort(){
    console.log("Server" ,porta);
}

app.use(router.get('/woman', showWoman))
app.listen(porta, showPort);