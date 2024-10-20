import {View, Text, SafeAreaView, Pressable} from "react-native";
import styles from "@/components/templates/OneTimePassword/OneTimePassword.styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {NextScreenButton, OTPInputScreen} from "@/components/atoms";
import {useRouter} from "expo-router";
import {OneTimePasswordProps} from "@/components/templates/OneTimePassword/OneTimePassword.types";
import {useState} from "react";

const OneTimePasswordTemplate = ({onVerifyOneTimePassword}: OneTimePasswordProps) => {
    const router = useRouter();
    const [otp, setOTP] = useState(['', '', '', '']);
    const updateOtp = (otp: Array<string>) => {
        setOTP(otp);
    }
    return <SafeAreaView style={styles.safeContainer}>
        <Pressable style={styles.backButton} onPress={() => router.push('/')}>
            <FontAwesome6 name="arrow-left-long" size={24} color="black"/>
        </Pressable>
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Verification</Text>
                <Text style={styles.subTitle}>Enter the OTP code we sent you</Text>
            </View>
            <OTPInputScreen otp={otp} updateOtp={updateOtp}/>
            <View style={styles.nextPrevButton}>
                <NextScreenButton disabled={otp.length !== 4} onPress={() => onVerifyOneTimePassword(otp.join(''))}/>
            </View>
        </View>
    </SafeAreaView>
}

export default OneTimePasswordTemplate;