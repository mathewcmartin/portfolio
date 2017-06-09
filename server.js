'use strict';

const pg = require('pg');
// const fs = require('fs');
const express = require('express');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://postgres:1234@localhost:5432/portfolio';
const client = new pg.Client(conString);
// app.use(express.static(./public));
client.connect();
client.on('error', function(err) {
console.error(err);
});
