const connection = require('@config/database');

class HistoryController {

  constructor() {
    this.getExpensesHistory = this.getExpensesHistory.bind(this);
    this.getTopupHistory = this.getTopupHistory.bind(this);
  }

  getExpensesHistory(req, res) {
    // Get all the expenses history
  }

  getTopupHistory(req, res) {
    // Get all the topup history
  }

}

export default new HistoryController;