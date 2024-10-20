import React from 'react';
import {View, TextInput, Text} from "react-native";
import styles from './Input.styles';
import {InputProps} from "@/components/atoms/Input/Input.types";

const InputComponent = React.forwardRef<TextInput, InputProps>(
    ({iconBefore, iconAfter, error, style, ...props}, ref) => {
        return (
            <View style={[styles.wrapper, style]}>
                <View style={styles.container}>
                    {iconBefore && <View style={styles.icon}>{iconBefore}</View>}
                    <View style={styles.divider}/>
                    <TextInput
                        ref={ref}
                        {...props}
                        style={styles.input}
                        placeholderTextColor="#C1C7D0"
                    />
                    {iconAfter && <View style={styles.icon}>{iconAfter}</View>}
                </View>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
            </View>
        );
    }
);

export default InputComponent;
