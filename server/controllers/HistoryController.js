const connection = require('@config/database');
const { getCurrentUser } = require('@controllers/AccountBalanceController');

class HistoryController {

  constructor() {
    this.getExpensesHistory = this.getExpensesHistory.bind(this);
    this.getTopupHistory = this.getTopupHistory.bind(this);
  }

  getExpensesHistory(req, res) {
    getCurrentUser(req, user => {
      connection.query('SELECT * FROM History WHERE label != "TOPUP" AND user_id = ?', user.id, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    });
  }

  getTopupHistory(req, res) {
    // Get all the topup history
  }

}

module.exports = new HistoryController;