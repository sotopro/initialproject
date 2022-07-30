import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const CustomInput = ({item, onChangeText, placeholder, onPressButton, inputValue, buttonText}) => {
    return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholderTextColor='#cccccc'
        placeholder={placeholder}
        value={item}
        onChangeText={onChangeText}
      />
      <Button title={buttonText} color='#7D8CC4' onPress={onPressButton} disabled={inputValue === ''}/>
     </View>
    )
}

export default CustomInput;