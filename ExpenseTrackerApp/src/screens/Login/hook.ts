import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';
import camelCaseKeys from 'camelcase-keys';
import api from '@api';

const useLogin = navigation => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState({});

  useEffect(() => {
    checkExistingUser();
  }, []);

  const clearInputs = () => {
    setInput({ username: '', password: '' });
  }

  const validate = () => {
    const formErrors = { username: '', password: '' };
    const SUFFIX_MESSAGE = 'field is required';
    if (input.username === '') formErrors.username = `Username ${SUFFIX_MESSAGE}`;
    if (input.password === '') formErrors.password = `Password ${SUFFIX_MESSAGE}`;
    setError(formErrors);
    const isErrorFree = Object.values(formErrors).every(error => error === '');
    return isErrorFree;
  }

  const storeToken = async (token: string) => {
    return await Keychain.setGenericPassword('token', token);
  }

  const getCurrentUser = async (token: string) => {
    const response = await fetch(`${api}/user`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) return;
    const user = await response.json();
    // store the existing user...
    navigation.navigate('Expenses');
    console.log(camelCaseKeys(user))
  }
  
  const checkExistingUser = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      const token = credentials.password;
      if (token) getCurrentUser(token);
    } catch(error) {
      console.log(error);
    }
  }

  const login = async () => {
    if (!validate()) return;
    const { username, password } = input;
    const response = await fetch(`${api}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    clearInputs();
    const data = await response.json();
    if (data.message.toLowerCase() === 'invalid username or password')
      return Alert.alert('Login Failed', data.message);
    storeToken(data.user.token)
      .then(() => {
        Alert.alert('Loggoed In', 'Login Successfully');
        navigation.navigate('Expenses');
      });
  }

  return { input, setInput, error, login };
}

export default useLogin;