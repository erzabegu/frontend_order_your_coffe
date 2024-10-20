import {Pressable, SafeAreaView, Text, View} from "react-native";
import styles from './NewPassword.styles';
import {InputComponent, NextScreenButton} from "@/components/atoms";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {useRouter} from "expo-router";
import {useForm, SubmitHandler} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {NewPasswordTypes} from "@/components/templates/NewPassword/NewPassword.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useState} from "react";

const schema = z.object({
    password: z.string()
        .min(1, {message: "Password is required"})
});

const NewPasswordTemplate = ({updatePassword}: NewPasswordTypes) => {
    const router = useRouter();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const {register, handleSubmit, watch, formState: {errors}, setValue, trigger} = useForm<{
        password: string;
    }>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<{ password: string }> = data => {
        updatePassword(data);
    };

    const handleChange = (field: keyof { password: string }) => (text: string) => {
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
                    <Text style={styles.title}>New Password</Text>
                    <Text style={styles.subTitle}>Enter new password</Text>

                    <View style={styles.form}>
                        <InputComponent
                            placeholder="Password"
                            secureTextEntry={!isPasswordVisible}
                            iconBefore={<Ionicons name="lock-closed-outline" size={24} color="black"/>}
                            iconAfter={
                                <MaterialCommunityIcons
                                    name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                    size={24}
                                    color="black"
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                />
                            }
                            value={watch("password")}
                            onChangeText={handleChange("password")}
                            error={errors.password?.message}
                            {...register("password")}
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

export default NewPasswordTemplate;
