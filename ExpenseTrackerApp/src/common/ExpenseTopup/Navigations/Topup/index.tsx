import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import Input from './Input';

const Topup = () => {
  return (
    <View style={style.topupContainer}>
      <View>
        <Input
          amount={"100"}
          onChangeAmount={amount => null}
        />

      </View>
    </View>
  );
}

export default Topup;