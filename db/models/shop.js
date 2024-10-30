'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate({ ShopsProduct, Product }) {
      this.hasMany(ShopsProduct, { foreignKey: 'shopId' });
      this.belongsToMany(Product, {
        through: ShopsProduct,
        foreignKey: 'shopId',
        otherKey: 'productId',
      });
    }
  }
  Shop.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Shop',
    },
  );
  return Shop;
};
