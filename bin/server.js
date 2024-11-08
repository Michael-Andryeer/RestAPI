import express from 'express';
import debug from 'debug';
import http from 'http';

const app = express();
const router = express.Router();

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API running on port ' + port);

function normalizePort(value) {
    const port = parseInt(value, 10);

    if (isNaN(port)) { // se não for um número
        return value;
    }

    if (port >= 0) { // Retorna a porta
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe' + port
        : 'Port' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requer privilégios de administrador.');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' já está em uso.');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr.port === 'string'
        ? 'Pipe' + addr.port
        : 'Port' + addr.port;
    debug('Listening on ' + bind);
}