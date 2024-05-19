/*'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users_products extends Model {
   
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'usersId' });
      this.belongsTo(models.Products, { foreignKey: 'productsId' });
    }
  }
  users_products.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_products',
  });
  return users_products;
};
*/

