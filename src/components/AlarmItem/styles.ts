import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
    marginRight: 16,
    marginLeft:16,
    marginTop: 10,
    borderRadius: 5,
  },
  labelContainer: {
    borderRadius: 5,
    borderTopEndRadius:0,
    borderBottomEndRadius: 0,
    padding: 10,
    width: '45%',
    marginRight: 10,
    opacity: 0.8
  },
  name: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  type: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 10
  },
  level: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 10
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  
  menuContainer: {
  },
  
  menuLabel: {
    fontSize: 30,
    color: '#747474',
    fontWeight: '600',
    transform: [{rotate: '90deg'}]
  },

});

export default styles;