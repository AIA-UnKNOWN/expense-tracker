import { useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import api from '@api';

const useHistories = () => {
  const [historyType, setHistoryType] = useState('expenses');
  const [isLoading, setIsLoading] = useState(false);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    getExpensesHistory();
  }, [histories]);

  const getUserToken = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      const token = credentials.password;
      if (token) return token;
    } catch(error) {
      console.log(error);
    }
  }

  const getExpensesHistory = async () => {
    const token = await getUserToken();
    const response = await fetch(`${api}/history/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) return;
    const expensesHistory = await response.json();
    setHistories(expensesHistory)
  }

  return { isLoading, histories, getExpensesHistory }
}

export default useHistories;