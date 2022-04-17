import style from './style';
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import useTotalBalance from './hook';

const TotalBalance: React.FC = () => {
  const { balance } = useTotalBalance();

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
          {balance}
        </Text>
      </View>
    </View>
  );
}

export default TotalBalance;