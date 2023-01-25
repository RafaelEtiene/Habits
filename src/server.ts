import Fastify from 'fastify';
import cors from '@fastify/cors'
import { appRoutes } from './routes';

const app = Fastify()

app.register(cors);
app.register(appRoutes)
/*
    Métodos HTTP:
    GET => Buscar uma informação
    POST => Criar algo
    PUT => Atualizar um recurso como um todo
    PATCH => Atualizar algo específico de um recurso
    DELETE => Deletar um recurso
*/

app.listen({
    port: 3333,
}).then(()=>{
    console.log('Server running')
})