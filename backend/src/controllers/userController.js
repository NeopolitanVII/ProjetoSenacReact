/**
 INFORMAÇÕES DO CONTROLLER

 1. Executa funções assíncronas que retornam uma Promise que é resolvida com um valor de retorno;
 2. Parâmetro request (requisição): é o pedido que um cliente (usuário) realiza a nosso servidor;
 3. Parâmetro response (resposta): é a resosta que o servidor envia ao cliente (usuário);
 4. Com a variável connection que possui as configurações do banco de dados, utilizamos a função query para realizar os comandos de gerenciamento do banco de dados;
 5. Validamos o retorno da requisição, caso tenha algum erro
 6. Retornamos as informações em formato JSON com chaves e valores para o client
 7. Try/Catch: utilizado para tratar erros que podem acontecer dentro do sistema

*/

// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listUsers( request, response ) {
    // Preparar o comando de execução no banco
    connection.query('SELECT id,username,email FROM users', (error, results, fields) => {
        if (error) {
            return response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível retornar os usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
        }
        response.status(200).json({
            success: true,
            message: 'Retorno de usuarios com sucesso!',
            data: results
        });
    });
}

// Função que cria um novo usuário 
async function storeUser(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO users(username, email, password) VALUES(?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.username,
        request.body.email,
        bcrypt.hashSync(request.body.password, 10),
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Usuário cadastrado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
   
    });
}

// Função que atualiza o usuário no banco
async function updateUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "UPDATE users SET `username` = ?, `password` = ? WHERE `id` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        request.body.username,
        bcrypt.hashSync(request.body.password, 10),
        request.params.id  // Recebimento de parametro da rota
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Usuário atualizado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
async function deleteUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM users WHERE `id` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Usuário deletado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function getById(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT id,username,email FROM users WHERE `id` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        if (err) {
            return response
                .status(500)
                .json({
                    success: false,
                    message: `Erro inesperado`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
        if (results.length===1) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Usuário Encontrado!`,
                    data: results
                });
        } else {
            response
                .status(404)
                .json({
                    success: false,
                    message: `Usuário não encontrado.`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });

        }
    });
}

module.exports = {
    listUsers,
    storeUser,
    updateUser,
    deleteUser,
    getById
}