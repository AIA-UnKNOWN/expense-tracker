import React, { useState } from 'react';
import Expense from './Navigations/Expense';
import Topup from './Navigations/Topup';

const useExpenseTopup = () => {
  const [tab, setTab] = useState('Expense');

  const renderTab = () => {
    switch(tab) {
      case 'Topup':
        return (<Topup />);
      default:
        return (<Expense />);
    }
  }

  return { setTab, renderTab };
}

export default useExpenseTopup;