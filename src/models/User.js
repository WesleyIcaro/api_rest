import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// O modelo user é trocado para users automaticamente, por isso não preciso preocupar do nome aqui está no singular e a tabela estar no plural
export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          }
        }
      },
      // eslint-disable-next-line camelcase
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50 caracteres',
          }
        }
      }
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async user => {
      if (user.password) {
        // eslint-disable-next-line camelcase
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }

}
