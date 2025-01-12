import {Modal, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import styles from './ActionSheet.styles'
import {ActionSheetProps} from "@/components/molecules/ActionSheet/ActionSheet.types";

const ActionSheet = ({title, triggerElement, options, onPress}: ActionSheetProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            {triggerElement}
        </TouchableOpacity>
        <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.label}>{title}</Text>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                onPress(option);
                                setModalVisible(false);
                            }}
                            style={styles.option}
                        >
                            <Text style={styles.optionText}>{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
                    <Text style={styles.cancelOptionText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </View>
}

export default ActionSheet;