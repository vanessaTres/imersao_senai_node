import fastify from 'fastify'
import { Pool } from 'pg'


const sql = new Pool({
    user:"postgres",
    password: "senai",
    host: "localhost",
    port: 5432,
    database: "receitas"

})

const servidor = fastify();

servidor.get('/usuarios', async () => {
    const resultado= await sql.query('select * from usuario')
    return resultado.rows    
})

servidor.post("/usuarios", async (request,reply) => {
    const body = request.body

    if(!body || !body.nome || !body.senha){
        return reply.status(400).send({message:"nome e senha são obrigatórios"})
        }
    const resultado = await sql.query('INSERT INTO USUARIO (nome, senha) VALUES ($1, $2)', [body.nome, body.senha])
    return 'usuario Cadastrado'
})



servidor.put("/usuarios/:id", async (request,reply) => {
    const body = request.body;
    const id = request.params.id;
    const resultado = await sql.query('UPDATE USUARIO SET nome= $1, senha=$2 WHERE id= $3', [body.nome, body.senha, id])
    return 'usuario Alterado'
})

servidor.delete("/usuarios/:id", async (request,reply) => {
    const id = request.params.id;
    const resultado = await sql.query('UPDATE FROM USUARIO where id= $1', [id])
    console.log(resultado);
    reply.status(200).send({message:'Usuário deletado!'})
})


servidor.listen({
    port:3000
})