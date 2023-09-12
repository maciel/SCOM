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

//Carregando Rotas
// const AlunosRoute = require('./routes/AlunosRoute')
// const PalestrasRoute = require('./routes/PalestrasRoute')
// const PalestrasAlunosRoute = require('./routes/PalestrasAlunosRoute')
// const UserRoute = require('./routes/UsuariosRoute')
// const Controller = require('../src/controller/controlador.js');
// const Turma = require('./routes/Turma')
// const Evento = require('./routes/Evento')
// const Professor = require('./routes/ProfessorRoute')
// const AlunoAll = require('./routes/AlunoAll')
// const minHoras = require('./routes/minHoras')
// const minHorasAll = require('./routes/minHorasAll')
// const authenticate= require('./routes/Authenticate')
//Utilizando Rotas
// app.use('/formulario', AlunosRoute)
// app.use('/palestras', PalestrasRoute)
// app.use('/palestrasAlunosRoute', PalestrasAlunosRoute)
// app.use('/userauth', UserRoute)
// app.use('/controller', Controller)
// app.use('/turma', Turma)
// app.use('/evento', Evento)
// app.use('/professor', Professor)
// app.use('/aluno', AlunoAll)
// app.use('/minHoras', minHoras)
// app.use('/minHorasAll', minHorasAll)
// app.use('/authenticate', authenticate)
//teste

//Porta do servidor
const port = process.env.PORT || 8061
app.listen(port, () => console.log("Servidor Rodando!"))