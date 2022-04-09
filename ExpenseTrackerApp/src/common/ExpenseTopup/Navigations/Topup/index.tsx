import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import useTopup from './hook';
import Input from './Input';
import AddButton from './AddButton';

const Topup = () => {
  const { amount, setAmount, topup } = useTopup();

  return (
    <View style={style.topupContainer}>
      <View style={style.inputContainer}>
        <Input
          amount={amount}
          onChangeAmount={setAmount}
        />
        <AddButton
          onAdd={topup}
        />
      </View>
    </View>
  );
}

export default Topup;