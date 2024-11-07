import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
    return 'Ola mundo'
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server Running')
})