const express = require("express")
const router= express.Router();

const app = express();
const porta = 3335;

function mostraHora(request, response){
    const data = new Date();
    const hora = data.toLocaleTimeString('pt-BR');
    response.send(hora);
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

router.get('/hora-local', mostraHora);
app.use(router);


app.listen(porta, mostraPorta);