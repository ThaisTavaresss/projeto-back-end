const express = require("express")
const router= express.Router()

const app = express()
const porta = 3334

const mulheres = [
    {
        nome: 'Thais Tavares',
        imagem: '',
        minibio: 'Analista de Relacionamento'
    },
    {
        nome: 'Fernandinho',
        imagem: '',
        minibio: 'Gatinho lindo da mamãe'
    },
    {
        nome: 'Raveninha',
        imagem: '',
        minibio: 'Panterinha linda da mamãe'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)