'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ game, playedgame }) {
      // define association here
      this.hasMany(game, { foreignKey: 'userId' }),
      this.hasMany(playedgame, { foreignKey: 'userId' })

    }

    //Hide id from queries results
    toJSON() {
      return { ...this.get(), id: undefined, password: undefined }
    }

  };
  user.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: 'L\'email doit être valide' },
        notNull: true,
        notEmpty: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [3, 15]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};