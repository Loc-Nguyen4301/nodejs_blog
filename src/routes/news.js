const express = require("express");
const route = require(".");

const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// newsController.index;

// check router /:slug dau tien, sau do check router /
router.use("/:slug", newsController.show);
router.use("/", newsController.index);
module.exports = router;
