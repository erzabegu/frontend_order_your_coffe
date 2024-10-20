import {Pressable, SafeAreaView, Text, View} from "react-native";
import styles from './ForgotPassword.styles';
import {InputComponent, NextScreenButton} from "@/components/atoms";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {useRouter} from "expo-router";
import {useForm, SubmitHandler} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {ForgotPasswordTypes} from "@/components/templates/ForgotPassword/ForgotPassword.types";
import useUserStore from "@/store/useUserStore";

const schema = z.object({
    email: z.string()
        .min(1, {message: "Email is required"})
        .email({message: "Please enter a valid email address"}),
});

const ForgotPasswordTemplate = ({sendCode}:ForgotPasswordTypes) => {
    const router = useRouter();
    const { setUserEmail } = useUserStore();

    const {register, handleSubmit, watch, formState: {errors}, setValue, trigger} = useForm<{
        email: string;
    }>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<{ email: string }> = data => {
        setUserEmail(data.email);
        sendCode(data);
    };

    const handleChange = (field: keyof { email: string }) => (text: string) => {
        setValue(field, text);
        if (errors[field]) trigger(field);
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Pressable style={styles.backButton} onPress={() => router.push('/')}>
                <FontAwesome6 name="arrow-left-long" size={24} color="black"/>
            </Pressable>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Forgot your password?</Text>
                    <Text style={styles.subTitle}>Enter your email address</Text>

                    <View style={styles.form}>
                        <InputComponent
                            placeholder="Email"
                            keyboardType="email-address"
                            iconBefore={<MaterialCommunityIcons name="email-outline" size={24} color="black"/>}
                            value={watch("email")}
                            onChangeText={handleChange("email")}
                            error={errors.email?.message}
                            {...register("email")}
                        />
                    </View>
                </View>

                <View style={styles.nextPrevButton}>
                    <NextScreenButton onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordTemplate;
