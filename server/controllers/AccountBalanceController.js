const connection = require('@config/database');
const jwt = require('jsonwebtoken');

class AccountBalanceController {

  constructor() {
    this.spend = this.spend.bind(this);
    this.topup = this.topup.bind(this);
  }

  getCurrentUser(req, callback) {
    jwt.verify(req.token, process.env.SECRET_KEY, (error, data) => {
      if (error) return res.status(401).json(error);
      callback(data.user);
    });
  }

  spend(req, res) {
    this.getCurrentUser(req, user => {
      const item = req.body;
      connection.query('SELECT * FROM Users WHERE id = ?', user.id, (err, result) => {
        if (err) throw err;
        if (result.length === 0) return res.status(401).json({
          message: 'Invalid username or password'
        });
        const queriedUser = result[0];
        connection.query(
          'UPDATE Users SET account_balance = ? WHERE id = ?',
          [queriedUser.account_balance - item.amount, user.id],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
              connection.query('INSERT INTO History SET ?', { ...item, user_id: user.id }, (err, result) => {
                if (err) throw err;
                res.sendStatus(201);
              });
            }
          }
        );
      });
    });
  }

  topup(req, res) {
    this.getCurrentUser(req, user => {
      const transaction = req.body;
      connection.query('SELECT * FROM Users WHERE id = ?', user.id, (err, result) => {
        if (err) throw err;
        if (result.length === 0) return res.status(401).json({
          message: 'Invalid username or password'
        });
        const queriedUser = result[0];
        connection.query(
          'UPDATE Users SET account_balance = ? WHERE id = ?',
          [queriedUser.account_balance + transaction.amount, user.id],
          (err, result) => {
            if (err) throw err;
            connection.query(
              'INSERT INTO History SET ?',
              { ...transaction, label: 'TOPUP', user_id: user.id },
              (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                  res.json(201);
                }
              }
            );
          }
        );
      });
    });
  }

}

module.exports = new AccountBalanceController;