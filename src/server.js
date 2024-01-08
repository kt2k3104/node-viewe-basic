const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { router } = require("./routes/admin.route");
const shopRoute = require("./routes/shop.route");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/admin", router);
app.use(shopRoute);

app.use("*", (req, res, next) => {
  res.render("404", { pageTitle: "Shop123", path: null });
});

app.listen(8333, () => {
  console.log("Server is running on port 8333");
});
