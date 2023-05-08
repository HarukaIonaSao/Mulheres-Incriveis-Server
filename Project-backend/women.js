const express = require("express");
const router = express.Router()

const app = express();
const porta = 3333;

const women = [
    {
        name:"Roberta Ribeiro",
        img: "https://github.com/harukaionasao.png",
        minibio: "Desenvolvedora fullstack | Acessibilidade"
    },
    {
        name:"Roberta Ribeiro",
        img: "https://github.com/harukaionasao.png",
        minibio: "Desenvolvedora fullstack | Acessibilidade"
    },
    {
        name:"Roberta Ribeiro",
        img: "https://github.com/harukaionasao.png",
        minibio: "Desenvolvedora fullstack | Acessibilidade"
    }
]

function showWomen(request,response){
    response.json(women)
}
function showPort(){
    console.log("Server" ,porta);
}

app.use(router.get('/women', showWomen))
app.listen(porta, showPort);