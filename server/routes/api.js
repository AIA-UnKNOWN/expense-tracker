const checkToken = require('@middleware/auth');
const { register, login, getCurrentUser } = require('@controllers/AuthController');
const { spend } = require('@controllers/AccountBalanceController');

const registerApiRoutes = app => {

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  // Authentication
  app.post('/register', register);
  app.post('/login', login);
  app.get('/user', checkToken, getCurrentUser);

  // Account Balance
  app.put('/account-balance/spend', checkToken, spend);

}

module.exports = registerApiRoutes;