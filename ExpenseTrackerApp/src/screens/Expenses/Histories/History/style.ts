import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  history: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    elevation: 5,
    shadowColor: '#000000',
    backgroundColor: "#ffffff",
    marginBottom: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});