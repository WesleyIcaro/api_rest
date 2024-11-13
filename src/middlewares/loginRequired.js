import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();

export default async(req, res, next) => {
  const { authorization }= req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Lopgin required']
    });
  }

  // O primeiro item da desestruturação antes da virgula recebe o valor antes do espaço(' ') e o segundo item recebe após o espaço.
  const [, token] = authorization.split(' ');

  try {

    // eslint-disable-next-line no-undef
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email } = dados;

    // Vai verificar se o email continua o mesmo após o update
    const user = await User.findOne({
      where: {
        id,
        email,
      }
    });

    if (!user){
      return res.status(401).json({
        errors: ['Usuário inválido']
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido:']
    });
  }

};
