const checkToken = require('@middleware/auth');
const { register, login, getCurrentUser } = require('@controllers/AuthController');
const { spend, topup } = require('@controllers/AccountBalanceController');
const { getExpensesHistory } = require('@controllers/HistoryController');

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
  app.put('/account-balance/topup', checkToken, topup);

  // History
  app.get('/history/expenses', checkToken, getExpensesHistory);

}

module.exports = registerApiRoutes;