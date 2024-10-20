import {Pressable, SafeAreaView, Text, View} from "react-native";
import styles from './LoginTemplate.styles';
import {InputComponent, NextScreenButton} from "@/components/atoms";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {useState} from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useRouter} from "expo-router";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Inputs, LoginTemplateProps} from "@/components/templates/LoginTemplate/LoginTemplate.types";

const schema = z.object({
    email: z.string()
        .min(1, {message: "Email is required"})
        .email({message: "Please enter a valid email address"}),
    password: z.string()
        .min(1, {message: "Password is required"})
        .min(6, {message: "Password must be at least 6 characters"}),
});

const LoginTemplate = ({onUserLogin}:LoginTemplateProps) => {
    const router = useRouter();
    const {register, handleSubmit, watch, trigger, formState: {errors}, setValue} = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = data => {
        onUserLogin(data)
        trigger();
    };

    const handleChange = (field: keyof Inputs) => (text: string) => {
        setValue(field, text);
        if (errors[field]) {
            trigger(field);
        }
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
                <FontAwesome6 name="arrow-left-long" size={24} color="black"/>
            </Pressable>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Sign In</Text>
                    <Text style={styles.subTitle}>Welcome back</Text>
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
                    <Text style={styles.forgotPassword} onPress={() => router.push("/forgot-password")}>
                        Forgot password?
                    </Text>
                </View>
                <View>
                    <Text onPress={() => router.push('/register')}>New member? Sign up</Text>
                </View>
                <View style={styles.nextPrevButton}>
                    <NextScreenButton disabled={Object.keys(errors).length > 0} onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LoginTemplate;
