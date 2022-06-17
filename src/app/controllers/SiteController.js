class SiteController {
  // render /home
  home(req, res) {
    res.render("home");
  }

  // [GET] /home/:slug

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

const siteController = require("./SiteController");
