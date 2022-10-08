import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,    
    width: '90%',
  }, 
  checkbox: {
    marginRight: 10,
    maxWidth: '85%'
  },
  trashButton: {
    alignItems: 'center',
    backgroundColor: '#e24a54',
    borderRadius: 5,
    height: 25,
    justifyContent: 'center',
    maxWidth: '15%',
    width: 25,
  },
  trashButtonText: {},
})