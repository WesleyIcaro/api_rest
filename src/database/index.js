import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

// connection.sync({ alter: true }).then(() => {
//   console.log('Sincronização feita com sucesso!');
// });

models.forEach((model) => model.init(connection));
