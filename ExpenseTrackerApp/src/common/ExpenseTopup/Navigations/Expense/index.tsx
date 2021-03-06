import style from './style';
import React from 'react';
import {
  View
} from 'react-native';
import useExpense from './hook';
import Inputs from './Inputs';
import AddButton from './AddButton';

const Expense: React.FC = () => {
  const { label, setLabel, amount, setAmount, add, addButtonText } = useExpense();

  return (
    <View style={style.expenseContainer}>
      <View style={{ width: '100%' }}>
        <Inputs
          label={label}
          amount={amount}
          onChangeLabel={setLabel}
          onChangeAmount={setAmount}
        />
        <AddButton
          label={addButtonText}
          onAdd={add}
        />
      </View>
    </View>
  );
}

export default Expense;