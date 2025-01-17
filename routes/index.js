const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/celebrities', require('./celebrities.routes.js'))
router.use('/movies', require('./movies.routes.js'))

module.exports = router;
