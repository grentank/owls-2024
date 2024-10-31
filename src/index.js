// const { Shop, Product, ShopsProduct } = require('../db-old/models');

const productService = require('./services/productService');

async function run() {
  try {
    // const shop = await Shop.findOne({
    //   where: {
    //     id: 2,
    //   },
    //   include: {
    //     model: ShopsProduct,
    //     include: {
    //       model: Product,
    //     },
    //   },
    // });
    // const shopProductsWithPrices = shop.ShopsProducts.map((el) => ({
    //     price: el.price,
    //     title: el.Product.title
    // }));
    // console.dir(JSON.parse(JSON.stringify(shopProductsWithPrices)), { depth: null });
    // const product = await Product.findOne({
    //   where: { title: 'Хлеб' },
    //   include: {
    //     model: ShopsProduct,
    //     attributes: ['shopId'],
    //     include: Shop,
    //   },
    // });
    // console.dir(JSON.parse(JSON.stringify(product)), { depth: null });
    // const product = await Product.findOne({
    //   where: { title: 'Хлеб' },
    //   include: {
    //     model: Shop,
    //     // attributes: ['shopId'],
    //     // include: Shop,
    //   },
    // });

    // await productService.createProductInShop({
    //   shopName: 'Газмяс',
    //   title: 'Тыква',
    //   price: 39,
    // });
    // await productService.createProductInShop({
    //   shopName: 'Газмяс',
    //   title: 'Сыр',
    //   price: 176,
    // });

    const products = await productService.getProductByShopName('Газмяс');
    console.dir(JSON.parse(JSON.stringify(products)), {
      depth: null,
    });
  } catch (error) {
    console.log(error);
  }
}

run();
