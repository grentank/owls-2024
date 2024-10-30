'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ ShopsProduct, Shop }) {
      this.hasMany(ShopsProduct, { foreignKey: 'productId' });
      this.belongsToMany(Shop, {
        through: ShopsProduct,
        foreignKey: 'productId',
        otherKey: 'shopId',
      });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      expDays: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
