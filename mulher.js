const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({ 
        nome: 'Thais Tavares',
        imagem: 'https://avatars.githubusercontent.com/u/107443845',
        minibio: 'Analista de Relacionamento, Desenvolvedora em desenvolvimento...rs'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)