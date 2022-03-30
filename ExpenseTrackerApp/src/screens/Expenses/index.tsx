import React from 'react';
import {
  View,
  Text
} from 'react-native';
import TotalBalance from '@common/TotalBalance';

const Expenses = ({ navigation }) => {
  return (
    <View>
      <TotalBalance amount={3000} />
      
    </View>
  );
}

export default Expenses;