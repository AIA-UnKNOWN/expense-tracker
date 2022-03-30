import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  totalBalanceContainer: {},
  label: {
    fontSize: 14,
    textAlign: 'center'
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  currency: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom: -5
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold'
  }
});