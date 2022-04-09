import { useState } from 'react';

const useExpense = () => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('0');

  const add = async () => {
    console.log({ label, amount: parseInt(amount) })
  }

  return { label, setLabel, amount, setAmount, add }
}

export default useExpense;