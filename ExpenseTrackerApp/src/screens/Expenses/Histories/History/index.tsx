import style from './style';
import React from 'react';
import {
  View,
  Text
} from 'react-native';

interface HistoryProps {
  label: string,
  amount: number
}

const History: React.FC<HistoryProps> = ({
  label, amount
}) => {
  return (
    <View style={style.history}>
      <Text style={style.label}>
        {label}
      </Text>
      <Text style={style.amount}>
        {amount}
      </Text>
    </View>
  );
}

export default History;