import { knex as setupKnex } from "knex";

export const knex = setupKnex({
    client: 'pg',
    connection: {
        host: 'localhost',  // endereço do seu banco de dados
        port: 5432, // porta padrão do PostgreSQL
        user: 'postgres',// seu usuário do PostgreSQL
        password: '123',// sua senha
        database: 'nodeapi'// nome do seu banco de dados
    }
});