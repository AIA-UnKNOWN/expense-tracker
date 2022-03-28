import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import { t } from 'react-native-tailwindcss';

interface InputProps {
  label: string,
  value: string,
  errorMessage: string,
  onChangeText: (text: string) => void
}

const Input: React.FC<InputProps> = ({
  label, value, errorMessage, onChangeText
}) => {
  return (
    <View style={[t.mB2]}>
      <Text style={[t.textBlack, t.mB2, t.mL1]}>
        {label}
      </Text>
      <TextInput
        style={[t.bgGray, t.rounded, t.h10]}
        onChangeText={onChangeText}
        value={value}
      />
      {errorMessage !== '' && (
        <Text style={[t.textRed, t.mL1]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

export default Input;