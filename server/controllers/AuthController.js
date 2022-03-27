const bcrypt = require('bcrypt');
const connection = require('@config/database');
const jwt = require('jsonwebtoken');

class AuthController {

  constructor() {
    this.encryptUser = this.encryptUser.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  encryptUser(user) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    return { ...user, password: hashedPassword };
  }

  getCurrentUser(req, res) {
    jwt.verify(req.token, process.env.SECRET_KEY, (error, data) => {
      if (error) return res.status(401).json(error);
      res.json(data.user);
    });
  }

  register(req, res) {
    const user = req.body;
    const encryptedUser = this.encryptUser(user);
    connection.query('INSERT INTO Users SET ?', encryptedUser, (err, result) => {
      if (err && err.code === 'ER_DUP_ENTRY')
        return res.status(500).json({ message: 'Username already exists' });
      res.status(201).json({ message: 'Created successfully' });
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

}

module.exports = new AuthController;