import { useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import camelCaseKeys from 'camelcase-keys';
import api from '@api';

const useTotalBalance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getCurrentUser();
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

  const getCurrentUser = async () => {
    const token = await getUserToken();
    if (!token) return setBalance(0);
    try {
      const response = await fetch(`${api}/user`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const user = await response.json();
      setBalance(camelCaseKeys(user).accountBalance);
    } catch (error) {
      throw error;
    }
  }

  return { balance }
}

export default useTotalBalance;