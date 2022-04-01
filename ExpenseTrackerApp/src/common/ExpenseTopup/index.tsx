import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import useExpenseTopup from './hook';
import Tabs from './Tabs';

interface ExpenseTopupProps {
  navigation: any,
  onAdd: (amount: number) => void
}

const ExpenseTopup: React.FC<ExpenseTopupProps> = ({
  navigation, onAdd
}) => {
  const { setTab, renderTab } = useExpenseTopup();

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={style.expenseTopupContainer}>
        <Tabs navigation={navigation} />
        {renderTab()}
      </View>
    </View>
  );
}

export default ExpenseTopup;