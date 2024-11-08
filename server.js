import http from 'http';
import debug from 'debug';
import express from 'express';
import { version } from 'os';

const app = express()
const port = 3000
app.set('port',port)

const server = http.createServer(app)
const router = express.Router()

const route = router.get('/', (request,response,next) => {
    response.status(200).send({
        title: "Node store",
        version: "0.0.1"
    })
})
app.use('/',route)

server.listen(port)
console.log('API rodando na porta ' + port)