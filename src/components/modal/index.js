import React from "react";
import { Modal } from "react-native";

const CustomModal = ({ children, modalVisible, animationType, onRequestClose }) => {
    return (
        <Modal
            animationType={animationType}
            visible={modalVisible}
            onRequestClose={onRequestClose}
        >
            {children}
        </Modal>
    )
}

export default CustomModal;