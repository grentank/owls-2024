'use strict';

const { Shop, Product, ShopsProduct } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Shop.bulkCreate([
      { name: 'Пятерочка', address: 'Москва, ул. Пушкина, д. Колотушкина' },
      { name: 'Магнит', address: 'Москва, ул. Полярная, д. 4' },
      { name: 'Лента', address: 'Москва, Красная Площадь, д. 1' },
      { name: 'Газмяс', address: 'Москва, Москва-река, д. 5, гл. -12м' },
    ]);
    await Product.bulkCreate([
      { title: 'Хлеб', description: 'Тортовый', expDays: 3 },
      { title: 'Lays с солью', description: 'Вкусные чипсы от Аршавина', expDays: 14 },
      { title: 'Колбаса', description: 'Мясная', expDays: 30 },
      {
        title: 'Добрый Кола',
        description: '"Вкусный" напиток от "добрых" людей',
        expDays: 365,
      },
    ]);
    await ShopsProduct.bulkCreate([
      { shopId: 1, productId: 1, price: 15 },
      { shopId: 1, productId: 2, price: 100 },
      { shopId: 1, productId: 3, price: 199 },
      { shopId: 2, productId: 1, price: 10 },
      { shopId: 2, productId: 2, price: 52 },
      { shopId: 3, productId: 4, price: 1 },
      { shopId: 4, productId: 1, price: 14 },
      { shopId: 4, productId: 2, price: 77 },
      { shopId: 4, productId: 3, price: 220 },
      { shopId: 4, productId: 4, price: 5 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
