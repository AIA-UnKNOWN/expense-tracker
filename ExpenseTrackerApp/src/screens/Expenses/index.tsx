import React from 'react';
import {
  View
} from 'react-native';
import TotalBalance from '@common/TotalBalance';
import ExpenseTopup from '@common/ExpenseTopup';

const Expenses = ({ navigation }) => {
  return (
    <View>
      <TotalBalance amount={3000} />
      <ExpenseTopup
        navigation={navigation}
        onAdd={amount => null}
      />
    </View>
  );
}

export default Expenses;