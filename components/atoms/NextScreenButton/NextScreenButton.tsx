import React from 'react';
import {Pressable} from "react-native";
import styles from './NextScreenButton.styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import {NextScreenButtonTypes} from "@/components/atoms/NextScreenButton/NextScreenButton.types";

const NextScreenButton = (props: NextScreenButtonTypes) => {
    return (
        <Pressable
            {...props}
            style={[styles.roundedContainer, props.disabled && styles.disabled, props.style]}>
            <AntDesign name="arrowright" size={32} color="white" />
        </Pressable>
    );
}

export default NextScreenButton;
