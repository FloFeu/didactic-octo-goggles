'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, playedgame }) {
      // define association here
      this.belongsTo(user, { foreignKey: 'userId'})
      this.hasMany(playedgame, { foreignKey: 'gameId'})
    }

    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined }
    }

  };
  game.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allownull: false
    },
    plateform: DataTypes.STRING,
    releaseDate: DataTypes.DATEONLY,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};