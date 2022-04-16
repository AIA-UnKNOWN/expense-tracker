import style from './style';
import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import useHistories from './hook';
import History, { HistoryProps } from './History';

const Histories: React.FC = () => {
  const { tab, isLoading, histories } = useHistories();

  return (
    <View style={style.histories}>
      <Text style={style.title}>
        History
      </Text>
      <ScrollView style={style.historiesContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : histories.length > 0 ? histories.map((history: HistoryProps) => (
          <History
            key={history.id}
            id={history.id}
            label={history.label}
            amount={`${tab === 'expenses' ? '-' : '+'} PHP ${history.amount}`}
          />
        )) : (
          <View style={style.noHistories}>
            <Text>
              No histories.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default Histories;