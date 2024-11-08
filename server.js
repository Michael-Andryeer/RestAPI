import http from 'http';
import debug from 'debug';
import express from 'express';
import { version } from 'os';

const app = express()
const port = normalizePort(process.env.PORT || '3000')
app.set('port',port)

const server = http.createServer(app)
const router = express.Router()

const route = router.get('/', (request,response,next) => {
    response.status(200).send({
        title: "Node store API",
        version: "0.0.1"
    })
})
app.use('/',route)

server.listen(port)
server.on('error',onError)
console.log('API rodando na porta ' + port)

function normalizePort(value) {
    const port = parseInt(value,10)

    if(isNaN(port)){ // se não for um número
        return value
    }

    if(port >= 0) { //Retorna a porta
        return port
    }

    return false
}

function onError(error) {
    if(error.syscall !== 'listen'){
        throw error
    }

    const bind = typeof port ==='string'
       ? 'Pipe'+ port
        : 'Port'+ port

        switch(error.code) {
            case 'EACCES':
                console.error(bind +'requer privilégios de administrador.')
                process.exit(1)
            case 'EADDRINUSE':
                console.error(bind +'já está em uso.')
                process.exit(1)
                break;
            default:
                throw error
        }
}