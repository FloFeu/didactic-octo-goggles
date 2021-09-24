'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playedgame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, game }) {
      // define association here
      this.belongsTo(user, { foreignKey: 'userId' }),
      this.belongsTo(game, { foreignKey: 'gameId' })
    }

    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined, gameId: undefined }
    }
  };
  playedgame.init({
    note: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'playedgame',
  });
  return playedgame;
};