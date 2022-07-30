import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const AddItem = ({item, onHandlerModal}) => {
    return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandlerModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
    )
}

export default AddItem;