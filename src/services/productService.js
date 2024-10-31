const db = require('../../db/models');

class ProductService {
  #models;

  // Dependency Injection
  constructor(models) {
    this.#models = models;
  }

  async getProductByShopName(shopName) {
    try {
      const targetShop = await this.#models.Shop.findOne({
        where: {
          name: shopName,
        },
        include: this.#models.Product,
      });
      if (!targetShop) throw new Error('Магазин не найден');
      return targetShop.Products.map((prod) => ({
        ...prod.get(),
        price: prod.ShopsProduct.price,
      }));
    } catch (error) {
      console.log(error, 'Ошибка получения товаров по магазину');
      throw error;
    }
  }

  async createProductInShop({ title, price, description = '', shopName }) {
    try {
      if (!title || !price || !shopName) throw new Error('Не все поля заполнены');
      const newProduct = await this.#models.Product.create({
        title,
        description,
      });
      const targetShop = await this.#models.Shop.findOne({
        where: {
          name: shopName,
        },
      });
      const newEntry = await this.#models.ShopsProduct.create({
        productId: newProduct.id,
        shopId: targetShop.id,
        price,
      });
      return newEntry;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

// Dependency Injection
const productService = new ProductService(db);
module.exports = productService;
