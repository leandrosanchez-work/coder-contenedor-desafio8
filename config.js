let conn = {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 8889,
      user : 'root',
      password : 'root',
    }
  }
let knex = require('knex')(conn);


  knex.raw('CREATE DATABASE contenedor').then(function () {
    knex.destroy();
  
    // connect with database selected
    conn.connection.database = 'contenedor';
    knex = require('knex')(conn);
  
    knex.schema
      .createTable('productos', function (table) {
        table.increments('id')
        table.string('name');
        table.double('price')
        table.string('imagen')
      })
      .then(function () {
        knex.destroy();
      });
  });