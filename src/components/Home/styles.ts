import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    flexDirection: 'column',
  },
  bloco1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
  },

  text: {
    fontSize: 20,
    color: '#929090',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    color: '#929090',
  },

  bloco2: {
    marginTop: 5,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    display: 'flex',
    padding: 2,
    justifyContent: 'center',
    flex: 1,
    gap: 40,
  },
  blocoInput: {
    flex: 1,
  },

  input: {
    borderWidth: 0.5,
    borderColor: '#b1b1b1',
    margin: 1,
    borderRadius: 10,
    backgroundColor: '#eeee',
    color: '#858282',
  },

  resultBloco: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textResult: {
    fontSize: 20,
    backgroundColor: '#841584',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',
    padding: 5,
    textAlign: 'center',
  },
});
