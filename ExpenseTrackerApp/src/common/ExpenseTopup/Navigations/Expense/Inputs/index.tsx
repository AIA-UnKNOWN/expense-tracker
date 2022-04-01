import style from './style';
import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

interface InputsProps {
  label: string,
  amount: string,
  onChangeLabel: () => void,
  onChangeAmount: () => void
}

const Inputs: React.FC<InputsProps> = ({
  label, onChangeLabel, amount, onChangeAmount
}) => {
  return (
    <View style={style.inputContainer}>
      <View style={[style.input, style.label]}>
        <Text style={style.inputText}>
          Label
        </Text>
        <TextInput
          style={style.textInput}
          value={label}
          onChangeText={onChangeLabel}
        />
      </View>
      <View style={[style.input, style.amount]}>
        <Text style={style.inputText}>
          Amount
        </Text>
        <TextInput
          style={style.textInput}
          keyboardType="numeric"
          value={amount}
          onChangeText={onChangeAmount}
        />
      </View>
    </View>
  );
}

export default Inputs;