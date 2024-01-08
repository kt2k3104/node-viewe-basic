const Product = require("../models/product.model");

const adminController = {
  getAddProduct: (req, res, next) => {
    res.render("addProduct", {
      pageTitle: "add product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  },
  postAddProduct: (req, res, next) => {
    const product = new Product(req.body.title);

    product.save();
    res.redirect("/");
  },
};

module.exports = {
  adminController,
};
