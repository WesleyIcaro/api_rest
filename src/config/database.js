/* eslint-disable no-undef */
require('dotenv').config();

module.exports = {
  // Sqlite
  dialect: 'sqlite',
  storage: './db.sqlite',

  // dialect: 'mariadb',
  // host: process.env.DATABASE_HOST,
  // port: process.env.DATABASE_PORT,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  // dialetOptions: {
  //   timezone: 'America/Sao_Paulo'
  // },
  // timezone: 'America/Sao_Paulo'
};
