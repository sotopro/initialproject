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
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: '#7D8CC4',
    marginVertical: 20,
  }
});
