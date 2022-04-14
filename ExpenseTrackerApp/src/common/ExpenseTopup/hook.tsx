import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@store';
import { setCurrentTab } from '@reducers/tabsSlice';
import Expense from './Navigations/Expense';
import Topup from './Navigations/Topup';

const useExpenseTopup = () => {
  const tab = useSelector((state: RootState) => state.tabs.currentTab);
  const dispatch = useDispatch();

  const goToExpensesTab = () => {
    dispatch(setCurrentTab({ tab: 'expenses' }));
  }

  const goToTopupsTab = () => {
    dispatch(setCurrentTab({ tab: 'topups' }));
  }

  const renderTab = () => {
    switch(tab) {
      case 'topups':
        return (<Topup />);
      case 'expenses':
        return (<Expense />);
    }
  }

  return { renderTab, goToExpensesTab, goToTopupsTab };
}

export default useExpenseTopup;