import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const inputvalue = item.trim();


  const onChangeText = (text) => {
    setItem(text);
  }

  const addItem = () => {
      if (inputvalue) {
        setItemList([
          ...itemList,
          {
            id: Math.random().toString(),
            value: item
          } 
        ])
        setItem('');
      }
  }

  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholderTextColor='#cccccc'
        placeholder='add item'
        value={item}
        onChangeText={onChangeText}
      />
      <Button title='Add' color='#7D8CC4' onPress={addItem} disabled={inputvalue === ''}/>
     </View>
     <View style={styles.itemList}>
      {itemList.map((item) => (
        <View key={`item-${item.id}`} style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View>
      ))}
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
  },
  itemList: {},
  itemContainer: {},
  item: {}
});
