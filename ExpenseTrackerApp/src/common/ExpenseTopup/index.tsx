import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import useExpenseTopup from './hook';
import Tabs from './Tabs';

interface ExpenseTopupProps {
  navigation: any
}

const ExpenseTopup: React.FC<ExpenseTopupProps> = ({
  navigation
}) => {
  const { goToExpensesTab, goToTopupsTab, renderTab } = useExpenseTopup();

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={style.expenseTopupContainer}>
        <Tabs
          navigation={navigation}
          onSwitchToExpense={goToExpensesTab}
          onSwitchToTopup={goToTopupsTab}
        />
        {renderTab()}
      </View>
    </View>
  );
}

export default ExpenseTopup;