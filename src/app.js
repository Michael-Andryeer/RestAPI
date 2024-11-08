import express from 'express';

const app = express();
const router = express.Router();

const route = router.get('/', (request, response, next) => {
    response.status(200).send({
        title: "Node store API",
        version: "0.0.1"
    });
});

app.use('/', route);

export { app };