import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -28,
    marginBottom: 100,
    paddingLeft: 15,
    paddingRight: 15
  },
  input: {    
    backgroundColor: "#262626",
    borderRadius: 5,
    flex: 1,
    height: 56,
    marginRight: 12,
    paddingLeft: 15,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'        
  },
  buttonText: {
    color: '#FFF',
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  }
})