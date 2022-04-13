import { useState, useEffect, useRef } from 'react';
import * as Keychain from 'react-native-keychain';
import api from '@api';

const useHistories = () => {
  const isMounted = useRef(true);
  const abortController = new AbortController();
  const [historyType, setHistoryType] = useState('expenses');
  const [isLoading, setIsLoading] = useState(false);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    switch (historyType) {
      case 'expenses':
        getExpensesHistory();
        break;
      case 'topups':
        getTopupsHistory();
        break;
    }
    return () => {
      abortController.abort();
      isMounted.current = false;
    }
  }, [historyType, histories]);

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
      if (!isMounted.current) return;
      setHistories(expensesHistory)
    } catch(error) {
      console.log(error);
    }
  }

  const getTopupsHistory = async () => {
    try {
      const token = await getUserToken();
      const response = await fetch(`${api}/history/topups`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        signal: abortController.signal
      });
      const topupsHistory = await response.json();
      if (!isMounted.current) return;
      setHistories(topupsHistory);
    } catch(error) {
      console.log(error);
    }
  }

  return { isLoading, histories, getExpensesHistory }
}

export default useHistories;