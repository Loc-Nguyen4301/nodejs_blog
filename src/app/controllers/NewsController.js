class NewsController {
  //render news
  index(req, res) {
    res.render("news");
  }

  // /news/:slug

  show(req, res) {
    res.send("New Details");
  }
}

module.exports = new NewsController();

const newsController = require("./NewsController");
