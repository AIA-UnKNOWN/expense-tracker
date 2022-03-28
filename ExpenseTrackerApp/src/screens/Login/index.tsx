import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { t } from 'react-native-tailwindcss';
import useLogin from './hook';
import Input from '@common/Form/Input';

const Login = ({ navigation }) => {
  const { input, setInput, error, login } = useLogin();

  return (
    <View style={[t.bgBlack, t.flex, t.flexCol, t.flex1, t.justifyBetween]}>
      <View>
        <Text style={[t.textWhite]}>
          Expense Tracker
        </Text>
      </View>
      <View style={[t.bgWhite, t.p4]}>
        <Text style={[t.textCenter, t.text3xl, t.fontSemibold, t.textBlack, t.mB5]}>
          Sign In
        </Text>
        <View>
          <Input
            label="Username"
            value={input.username}
            onChangeText={(text: string) => setInput({ ...input, username: text })}
            errorMessage={'Error'}
          />
          <Input
            label="Password"
            value={input.password}
            onChangeText={(text: string) => setInput({ ...input, password: text })}
            errorMessage={'Error'}
          />
        </View>
        <TouchableOpacity
          style={[t.bgBlack, t.flex, t.justifyCenter, t.alignCenter, t.h12, t.rounded, t.mT5]}
          onPress={login}
        >
          <Text style={[t.textWhite, t.textCenter, t.fontSemibold]}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;