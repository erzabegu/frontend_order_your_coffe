import {StyleProp, TextInputProps, ViewStyle} from "react-native";

export interface InputProps extends TextInputProps {
    iconBefore: React.ReactNode;
    iconAfter?: React.ReactNode;
    error?: string;
    style?: StyleProp<ViewStyle>;
}