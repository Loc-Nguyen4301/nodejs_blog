const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  //   app.get("./news", (req, res) => {
  //     res.render("new");
  //   });

  app.use("/news", newsRouter);

  app.use("/", siteRouter);
}

module.exports = route;
