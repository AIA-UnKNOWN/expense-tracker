const bcrypt = require('bcrypt');
const connection = require('@config/database');
const jwt = require('jsonwebtoken');

class AuthController {

  constructor() {
    this.encryptUser = this.encryptUser.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  encryptUser(user) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    return { ...user, password: hashedPassword };
  }

  getCurrentUser() {

  }

  register(user, callback) {
    const encryptedUser = this.encryptUser(user);
    connection.query('INSERT INTO Users SET ?', encryptedUser, (err, res) => {
      if (err && err.code === 'ER_DUP_ENTRY') {
        return callback({
          message: 'Username already exists',
          statusCode: 500
        });
      };
      return callback({
        message: 'Created successfully',
        statusCode: 201
      });
    });
  }

  login(req, res) {
    const user = req.body;
    connection.query('SELECT * FROM Users WHERE username = ?', user.username, (err, result) => {
      if (err) throw err;
      if (result.length === 0) return res.status(401).json({
        message: 'Invalid username or password'
      });
      const queriedUser = result[0];
      if (!bcrypt.compareSync(user.password, queriedUser.password)) return res.status(401).json({
        message: 'Invalid username or password'
      });
      const token = jwt.sign({ user: queriedUser }, process.env.SECRET_KEY, { expiresIn: "14d" });
      res.json({
        message: 'Login successfully',
        user: { ...queriedUser, token }
      });
    });
  }

  logout() {

  }

}

module.exports = new AuthController;