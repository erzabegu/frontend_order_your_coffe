import React, { useRef} from 'react';
import {View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData} from 'react-native';
import styles from './OTPInputScreen.styles';
import {OTPInputScreenTypes} from "@/components/atoms/OTPInputScreen/OTPInputScreen.types";

const OTPInputScreen = ({otp, updateOtp}: OTPInputScreenTypes) => {
    const inputRefs = useRef<Array<TextInput | null>>([]);

    const handleChangeText = (text: string, index: number) => {
        if (text.length === 1) {
            const newOtp = [...otp];
            newOtp[index] = text;
            updateOtp(newOtp);

            if (index < 3) {
                inputRefs.current[index + 1]?.focus();
            }
        } else if (text === '') {
            const newOtp = [...otp];
            newOtp[index] = '';
            updateOtp(newOtp);
        }
    };

    const handleBackspace = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        onChangeText={(text) => handleChangeText(text, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={(el) => (inputRefs.current[index] = el)}
                        onKeyPress={(e) => handleBackspace(e, index)}
                    />
                ))}
            </View>
        </View>
    );
};


export default OTPInputScreen;
