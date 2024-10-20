import {Pressable, SafeAreaView, Text, View} from "react-native";
import styles from './RegisterTemplate.styles';
import {InputComponent, NextScreenButton} from "@/components/atoms";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {useState} from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useRouter} from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import {useForm, SubmitHandler} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {Inputs, RegisterTemplateProps} from "@/components/templates/RegisterTemplate/RegisterTemplate.types";

const schema = z.object({
    name: z.string().min(1, {message: "Please enter your name."}),
    phone: z.string()
        .length(10, {message: "Phone number must be exactly 10 digits."})
        .regex(/^[0-9]+$/, {message: "Phone number must be numeric."}),
    email: z.string()
        .email({message: "Please enter a valid email address."}),
    password: z.string()
        .min(6, {message: "Password must be at least 6 characters long."}),
});

const RegisterTemplate = ({onUserRegister}: RegisterTemplateProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, watch, formState: {errors}, setValue, trigger} = useForm<Inputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = data => {
        onUserRegister(data);
    };

    const handleChange = (field: keyof Inputs) => (text: string) => {
        setValue(field, text);
        trigger(field);
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
                <FontAwesome6 name="arrow-left-long" size={24} color="black"/>
            </Pressable>

            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Sign up</Text>
                    <Text style={styles.subTitle}>Create an account here</Text>

                    <View style={styles.form}>
                        <InputComponent
                            placeholder="Name"
                            iconBefore={<Ionicons name="person-outline" size={24} color="black"/>}
                            value={watch("name")}
                            onChangeText={handleChange("name")}
                            error={errors.name?.message}
                            {...register("name")}
                        />
                        <InputComponent
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                            iconBefore={<Feather name="smartphone" size={24} color="black"/>}
                            value={watch("phone")}
                            onChangeText={handleChange("phone")}
                            error={errors.phone?.message}
                            {...register("phone")}
                        />
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
                </View>

                <View>
                    <Text onPress={() => router.push('/login')}>Already a member? Sign In</Text>
                </View>

                <View style={styles.nextPrevButton}>
                    <NextScreenButton onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterTemplate;
