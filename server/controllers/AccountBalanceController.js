const connection = require('@config/database');

class AccountBalanceController {

  constructor() {
    this.spend = this.spend.bind(this);
    this.topup = this.topup.bind(this);
  }

  spend(req, res) {
    const item = req.body;
    connection.query('SELECT * FROM Users WHERE id = ?', item.user_id, (err, result) => {
      if (err) throw err;
      if (result.length === 0) return res.status(401).json({
        message: 'Invalid username or password'
      });
      const user = result[0];
      connection.query(
        'UPDATE Users SET account_balance = ? WHERE id = ?',
        [user.account_balance - item.amount, user.id],
        (err, result) => {
          if (err) throw err;
          if (result.affectedRows > 0) {
            connection.query('INSERT INTO History SET ?', item, (err, result) => {
              if (err) throw err;
              res.sendStatus(201);
            });
          }
        }
      );
    });
  }

  topup(req, res) {
    const transaction = req.body;
    connection.query('SELECT * FROM Users WHERE id = ?', transaction.user_id, (err, result) => {
      if (err) throw err;
      if (result.length === 0) return res.status(401).json({
        message: 'Invalid username or password'
      });
      const user = result[0];
      connection.query(
        'UPDATE Users SET account_balance = ? WHERE id = ?',
        [user.account_balance + transaction.amount, user.id],
        (err, result) => {
          if (err) throw err;
          connection.query(
            'INSERT INTO History SET ?',
            { ...transaction, label: 'TOPUP' },
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
  }

}

module.exports = new AccountBalanceController;