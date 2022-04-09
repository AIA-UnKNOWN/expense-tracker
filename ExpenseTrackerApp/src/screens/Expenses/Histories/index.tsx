import style from './style';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import useHistories from './hook';
import History from './History';

const Histories: React.FC = () => {
  const { isLoading, histories } = useHistories();

  return (
    <View style={style.histories}>
      <Text style={style.title}>
        History
      </Text>
      <View style={style.historiesContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : histories.length > 0 ? histories.map(history => (
          <History
            key={history.id}
            label={history.label}
            amount={history.amount}
          />
        )) : (
          <View style={style.noHistories}>
            <Text>
              No histories.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Histories;