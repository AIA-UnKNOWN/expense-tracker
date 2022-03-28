import { useState } from 'react';
import { Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

const useLogin = navigation => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState({});

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
    await Keychain.setGenericPassword('token', token);
    Alert.alert('Logged In', 'Login Successfully');
  }

  const login = async () => {
    if (!validate()) return;
    const { username, password } = input;
    const response = await fetch('http://192.168.1.12:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.message.toLowerCase() === 'invalid username or password')
      return Alert.alert('Login Failed', data.message);
    storeToken(data.user.token);
    clearInputs();
  }

  return { input, setInput, error, login };
}

export default useLogin;