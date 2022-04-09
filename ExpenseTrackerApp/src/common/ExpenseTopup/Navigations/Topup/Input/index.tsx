import style from './style';
import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

interface InputProps {
  amount: string,
  onChangeAmount: () => void
}

const Input: React.FC<InputProps> = ({
  amount, onChangeAmount
}) => {
  return (
    <View style={style.inputContainer}>
      <Text style={style.inputText}>
        Amount
      </Text>
      <TextInput
        style={style.textInput}
        value={amount}
        onChangeText={onChangeAmount}
        keyboardType="numeric"
      />
    </View>
  );
}

export default Input;