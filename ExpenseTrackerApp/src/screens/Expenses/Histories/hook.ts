import { useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import api from '@api';

const useHistories = () => {
  const abortController = new AbortController();
  const [historyType, setHistoryType] = useState('expenses');
  const [isLoading, setIsLoading] = useState(false);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    getExpensesHistory();
    return () => {
      abortController.abort();
    }
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
    try {
      const token = await getUserToken();
      const response = await fetch(`${api}/history/expenses`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        signal: abortController.signal
      });
      const expensesHistory = await response.json();
      setHistories(expensesHistory)
    } catch(error) {
      console.log(error);
    }
  }

  return { isLoading, histories, getExpensesHistory }
}

export default useHistories;