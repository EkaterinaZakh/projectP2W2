const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Initiative }) {
      this.hasMany(Initiative, { foreignKey: 'districtId' });
      this.hasMany(User, { foreignKey: 'districtId' });
    }
  }
  District.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};
