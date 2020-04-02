const express = require('express');  
const cors = require('cors'); 
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/**
* Rota / Recurso
*/

/**
 *  Método HTTP:
 *  * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeado enviados na rota apos "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recurso
 * Request Body: Corpo da requisição, utilizado para crir ou alterar recurso
 */

 /**
  * SQL: MySQLL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
  * NoSQL: MongoDB, CouchDB, ect 
  *//**
 * Driver: SELECT * FROM users
 * Query Builder: table('user').select('*').where()
 */

