import { RegisterTemplate} from "@/components/templates";
import {AuthService} from "@/services/authService";
import {Inputs} from "@/components/templates/RegisterTemplate/RegisterTemplate.types";
import {useRouter} from "expo-router";
import Toast from "react-native-root-toast";
import {AxiosError} from "axios";

const RegisterPage = () => {
    const router = useRouter();

    const onUserRegister = (data: Inputs) => {
        const {email, password, phone, name} = data;
        AuthService.register(email, password, name, phone).then(() => {
            router.push("/");
        }).catch((err) => {
            if (err instanceof AxiosError) {
                Toast.show(err?.message, {backgroundColor: 'red'})
            } else {
                Toast.show(err, {backgroundColor: 'red'});
            }
        })
    }
    return <RegisterTemplate onUserRegister={onUserRegister}/>
}


export default RegisterPage;