require('module-alias/register');
require('dotenv').config();
const express = require('express');
const registerApiRoutes = require('@routes/api');

const app = express();
app.use(express.json());
const PORT = 3000;

registerApiRoutes(app);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});