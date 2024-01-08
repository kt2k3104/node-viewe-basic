const Product = require("../models/product.model");

const shopController = {
  getAllProduct: (req, res, next) => {
    Product.fetchAll((products) => {
      res.render("products", {
        pageTitle: "shopp",
        path: "/",
        prods: products,
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
      });
    });
  },
};

module.exports = shopController;
