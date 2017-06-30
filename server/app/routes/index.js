'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/articles', require('./articles'));

router.use(function (req, res) {
  res.status(404).end();
});
