import style from './style';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const Tab = ({ navigation }) => {
  return (
    <View style={style.tabContainer}>
      <TouchableOpacity
        onPress={() => null}
      >
        <Text style={style.tab}>
          Expense
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => null}
      >
        <Text style={style.tab}>
          Top Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tab;