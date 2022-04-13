import { useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import api from '@api';
import useHistories from '@screens/Expenses/Histories/hook';

const useExpense = () => {
  const abortController = new AbortController();
  const { getExpensesHistory } = useHistories();
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('0');
  const [addButtonText, setAddButtonText] = useState('Add');

  useEffect(() => {
    return () => {
      abortController.abort();
    }
  }, []);

  const getUserToken = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      const token = credentials.password;
      if (token) return token;
    } catch(error) {
      console.log(error);
    }
  }

  const add = async () => {
    try {
      setAddButtonText('Adding...');
      const token = await getUserToken();
      const response = await fetch(`${api}/account-balance/spend`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ label, amount: parseInt(amount) }),
        signal: abortController.signal
      });
      getExpensesHistory();
    } catch(error) {
      console.log(error);
    } finally {
      setAddButtonText('Add');
    }
  }

  return { label, setLabel, amount, setAmount, add, addButtonText }
}

export default useExpense;