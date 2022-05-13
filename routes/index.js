var express = require('express');
const { ProcessApplication } = require('./APIs/applications');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/process-applications",ProcessApplication)
router.post("/process-applications",ProcessApplication)

module.exports = router;
