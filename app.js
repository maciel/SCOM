//Módulos
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const handlebars = require('express-handlebars')
const cors = require("cors")

//Configurações
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.get('/', function (req, res) {
    res.render('formulario')
})
app.post('/envio', function (req, res) {
    res.send('ENVIADO!')
})


//Porta do servidor
const port = process.env.PORT || 8061
app.listen(port, () => console.log("Servidor Rodando!"))