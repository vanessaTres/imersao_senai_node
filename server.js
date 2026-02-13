import fastify from 'fastify';
const servidor = fastify();

servidor.get('/usuarios',() => {
    return 'WEEEE ARE THE CHAMPIONS, MY FRIEEEND!'
})

servidor.post('/usuarios',(request, reply) => {
    return 'WEEEE ARE THE CHAMPIONS, MY FRIEEEND!'
})

servidor.listen({
    port:3000
})