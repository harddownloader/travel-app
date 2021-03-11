require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./src/routing');

const {
  PORT,
} = process.env;

const app = express();
const DIST_DIR = path.join(__dirname, '../dist');

app.use(express.static('public'));
app.use('/', express.static(DIST_DIR));

app.listen(PORT, () => {
  console.info(`App listening on port:${PORT}`);
});