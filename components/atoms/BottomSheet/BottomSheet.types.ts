import {PressableProps, StyleProp, TextStyle, ViewStyle} from "react-native";
import {SharedValue} from "react-native-reanimated";

export interface BottomSheetProps {
    children?: React.ReactNode;
    isOpen: SharedValue<boolean>;

    toggleSheet?(e: PressableProps): void;

    duration?: number;
    externalStyle?: StyleProp<ViewStyle | TextStyle>;
}