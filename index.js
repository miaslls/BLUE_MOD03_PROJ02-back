'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/moods.routes');
const databaseConnection = require('./src/database/database');

const app = express();
const port = process.env.PORT || 3000;

databaseConnection();

app.use(express.json());
app.use(cors());
app.use('/mood', routes);

app.listen(port, () => {
  console.log(`http://localhost:3000 🔗 || ${port}`);
});
