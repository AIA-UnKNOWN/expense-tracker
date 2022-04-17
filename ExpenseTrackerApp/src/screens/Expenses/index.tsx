import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import TotalBalance from '@common/TotalBalance';
import ExpenseTopup from '@common/ExpenseTopup';
import Histories from './Histories';

const Expenses = ({ navigation }) => {
  return (
    <View style={style.expenses}>
      <TotalBalance />
      <ExpenseTopup
        navigation={navigation}
      />
      <Histories />
    </View>
  );
}

export default Expenses;