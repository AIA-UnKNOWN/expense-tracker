import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import Tabs from './Tabs';

interface ExpenseTopupProps {
  navigation: any,
  onAdd: (amount: number) => void
}

const ExpenseTopup: React.FC<ExpenseTopupProps> = ({
  navigation, onAdd
}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={style.expenseTopupContainer}>
        <Tabs navigation={navigation} />
        {/* render tab here either Expense/Topup */}
      </View>
    </View>
  );
}

export default ExpenseTopup;