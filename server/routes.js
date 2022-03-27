const checkToken = require('@middleware/auth');
const { register, login, getCurrentUser } = require('@controllers/AuthController');

const registerRoutes = app => {

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  // Authentication
  app.post('/register', register);
  app.post('/login', login);
  app.get('/user', checkToken, getCurrentUser);

}

module.exports = registerRoutes;