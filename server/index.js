require('module-alias/register');
require('dotenv').config();
const express = require('express');
const registerRoutes = require('./routes');

const app = express();
app.use(express.json());
const PORT = 3000;

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});