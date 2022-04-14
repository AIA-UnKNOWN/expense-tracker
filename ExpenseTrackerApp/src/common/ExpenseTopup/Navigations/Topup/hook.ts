import { useState, useRef, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import api from '@api';
import useHistories from '@screens/Expenses/Histories/hook';

const useTopup = () => {
  const isMounted = useRef(true);
  const { getTopupsHistory } = useHistories();
  const [amount, setAmount] = useState("0");

  useEffect(() => {
    return () => {
      isMounted.current = false;
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

  const topup = async () => {
    const token = await getUserToken();
    try {
      const response = await fetch(`${api}/account-balance/topup`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: parseInt(amount) })
      });
      if (!isMounted.current) return;
      getTopupsHistory();
    } catch(error) {
      console.log(error);
    }
  }

  return { amount, setAmount, topup }
}

export default useTopup;