import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming
} from "react-native-reanimated";
import React from "react";
import styles from './BottomSheet.styles';
import {BottomSheetProps} from "@/components/atoms/BottomSheet/BottomSheet.types";

const BottomSheet = ({isOpen, duration = 500, children, externalStyle}: BottomSheetProps) => {
    const height = useSharedValue(0);

    const progress = useDerivedValue(() =>
        withTiming(isOpen.value ? 0 : 1, {duration})
    );

    const sheetStyle = useAnimatedStyle(() => ({
        transform: [{translateY: progress.value * 2 * height.value}],
    }));

    return (
        <Animated.View
            onLayout={(e) => {
                height.value = e.nativeEvent.layout.height;
            }}
            style={[styles.sheet, sheetStyle, externalStyle]}>
            {children}
        </Animated.View>
    );
};

export default BottomSheet;
