import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

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

  const onDeleteItem = (id) => {
    console.log(id)
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => onDeleteItem(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )

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
      <FlatList 
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style
      />
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#7D8CC4',
  },
  itemList: {
    backgroundColor: '#fff',
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#7D8CC4',
    padding: 20,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

  },
  item: {
    fontSize: 18,
    color: '#ffffff'
  },
  delete: {
    color : '#fff',
    fontSize: 18,
  }
});
