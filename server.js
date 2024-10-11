import { fastify } from "fastify"


import { DatabasePostgres } from "./database-postgres.js"

const database = new DatabasePostgres()

const server = fastify()

server.get('/', ()=>{
    return "Bem vindo a minha API"
})

server.get('/alunos', async ()=>{
   const alunos = await database.select()
   return alunos
})

server.post('/alunos', async (request, reply)=>{
   await database.insert({
        name: request.body.name,
        email: request.body.email,
        age: request.body.age
    })
    
    return reply.status(201).send()
})

server.put('/alunos/:id', async (request, reply)=>{
    const id = request.params.id
   await database.update (id, {
        name: request.body.name,
        email: request.body.email,
        age: request.body.age
    })
    return reply.status(204).send()

    
})

server.delete('/alunos/:id', async (request, reply)=>{
    const id = request.params.id
   await database.delete(id)
    return reply.status(204).send ()
    
})
server.listen({
    host: '0.0.0.0',
    port: 3333
})