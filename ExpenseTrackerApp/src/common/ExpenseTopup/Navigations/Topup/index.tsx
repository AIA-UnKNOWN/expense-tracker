import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import useTopup from './hook';
import Input from './Input';
import AddButton from './AddButton';

const Topup = () => {
  const { amount, setAmount, topup, addButtonText } = useTopup();

  return (
    <View style={style.topupContainer}>
      <View style={style.inputContainer}>
        <Input
          amount={amount}
          onChangeAmount={setAmount}
        />
        <AddButton
          label={addButtonText}
          onAdd={topup}
        />
      </View>
    </View>
  );
}

export default Topup;