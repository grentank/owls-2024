'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopsProduct extends Model {
    static associate({ Shop, Product }) {
      this.belongsTo(Shop, { foreignKey: 'shopId' });
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  ShopsProduct.init(
    {
      productId: DataTypes.INTEGER,
      shopId: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'ShopsProduct',
    },
  );
  return ShopsProduct;
};
