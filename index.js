const { Shop, Product, ShopsProduct } = require('./db/models');

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
    const product = await Product.findOne({
      where: { title: 'Хлеб' },
      include: {
        model: Shop,
        // attributes: ['shopId'],
        // include: Shop,
      },
    });
    console.dir(JSON.parse(JSON.stringify(product.Shops.map(s => s.name))), { depth: null });
  } catch (error) {
    console.log(error);
  }
}

run();
