import style from './style';
import React from 'react';
import {
  View,
  Text
} from 'react-native';

export interface HistoryProps {
  id: number,
  label: string,
  amount: string
}

const History: React.FC<HistoryProps> = ({
  id, label, amount
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