import { useState } from 'react';

const useExpense = () => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('0');

  const add = async () => {
    
  }

  return { label, setLabel, amount, setAmount, add }
}

export default useExpense;