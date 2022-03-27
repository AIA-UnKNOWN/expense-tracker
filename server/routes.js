const checkToken = require('@middleware/auth');
const { register, login } = require('@controllers/AuthController');

const registerRoutes = app => {

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  // Authentication
  app.post('/register', (req, res) => {
    register(req.body, ({ message, statusCode }) => {
      res.status(statusCode).json({ message });
    });
  });
  app.post('/login', login);

}

module.exports = registerRoutes;