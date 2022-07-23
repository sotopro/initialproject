import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholderTextColor='#cccccc' placeholder='add item'/>
      <Button title='Add' color='#7D8CC4' />
     </View>
     <View>
      <Text>Lista</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#7D8CC4',
  }
});
