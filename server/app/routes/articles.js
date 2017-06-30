const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');

router.get('/', (req, res) =>
  jsonfile.readFile('./server/db/articles.json', (err, data) => err ? console.error(err) : res.json(data))
);

module.exports = router;
