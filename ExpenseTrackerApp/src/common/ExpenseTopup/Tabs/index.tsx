import style from './style';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

interface TabProps {
  navigation: any,
  onSwitchToExpense: () => void,
  onSwitchToTopup: () => void
}

const Tab: React.FC<TabProps> = ({
  navigation, onSwitchToExpense, onSwitchToTopup
}) => {
  return (
    <View style={style.tabContainer}>
      <TouchableOpacity
        onPress={onSwitchToExpense}
      >
        <Text style={style.tab}>
          Expense
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSwitchToTopup}
      >
        <Text style={style.tab}>
          Top Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tab;