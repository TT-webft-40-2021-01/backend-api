const knex = require("knex");


const knexfile = require('../knexfile');

//on the Heroku NODE_ENV will be 'production

const enviroment = process.env.NODE_ENV || "development";

const config = knexfile[enviroment];

module.exports = knex(config);