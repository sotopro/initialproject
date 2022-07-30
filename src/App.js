import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { CustomModal, CustomInput, AddItem } from './components/index';

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
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }


  const renderItem = ({ item }) => (
    <AddItem item={item} onHandlerModal={onHandlerModal} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput 
        item={item}
        onChangeText={onChangeText}
        placeholder='Enter item'
        onPressButton={addItem}
        inputValue={inputvalue}
        buttonText='Add'
      />
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
  itemList: {
    backgroundColor: '#fff',
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
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
