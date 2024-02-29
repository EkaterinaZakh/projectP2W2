const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, District }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(District, { foreignKey: 'districtId' });
    }
  }
  Initiative.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    voites: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    districtId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};
