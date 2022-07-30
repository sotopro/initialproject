import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { CustomModal } from './components/index';

export default function App() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const inputvalue = item.trim();


  const onChangeText = (text) => {
    setItem(text)
  }

  const addItem = () => {
      if (inputvalue) {
        setItemList([
          ...itemList,
          {
            id: itemList.length + 1,
            value: item
          } 
        ])
        setItem('');
      }
  }

  const onDeleteItem = (id) => {
    console.warn('onDeleteItem id', id);
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = (id) => {
    console.warn('onHandlerModal id', id);
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }


  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandlerModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
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
     <CustomModal animationType='slide' modalVisible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalTitle}>Detalle de la lista</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalMessage}> ¿Estás seguro que deseas eliminar?</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title='Eliminar' onPress={() => onDeleteItem(itemSelected.id)} color='#7D8CC4' />
            <Button title='Cancelar' onPress={() => setModalVisible(!modalVisible)} color='#cccccc' />
          </View>
        </View>
     </CustomModal>
    </SafeAreaView>
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
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalMessage: {
    fontSize: 14,
  },
  modalItem: {
    fontSize: 15,
    color: '#7D8CC4',
    fontWeight: 'bold',
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  modal: {
    flex: 1,
    marginTop: 30
  }
});
