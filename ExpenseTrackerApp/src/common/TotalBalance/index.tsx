import style from './style';
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { t } from 'react-native-tailwindcss';

interface TotalBalanceProps {
  amount: number
}

const TotalBalance: React.FC<TotalBalanceProps> = ({ amount }) => {
  return (
    <View style={style.totalBalanceContainer}>
      <Text style={style.label}>
        Total Balance
      </Text>
      <View style={style.amountContainer}>
        <Text style={style.currency}>
          PHP
        </Text>
        <Text style={style.amount}>
          {amount}
        </Text>
      </View>
    </View>
  );
}

export default TotalBalance;