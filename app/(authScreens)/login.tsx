import {LoginTemplate} from "@/components/templates";
import {AuthService} from "@/services/authService";
import {AxiosError} from "axios";
import Toast from "react-native-root-toast";
import {useRouter} from "expo-router";
import {Inputs} from "@/components/templates/LoginTemplate/LoginTemplate.types";

const Login = () => {
    const router = useRouter();
    const onUserLogin = (data: Inputs) => {
        const {email, password} = data;
        AuthService.login(email, password).then((res) => {
            console.log(res,"Res")
            router.push("/");
        }).catch((err) => {
            if (err instanceof AxiosError) {
                Toast.show(err?.message, {backgroundColor: 'red'})
            } else {
                Toast.show(err, {backgroundColor: 'red'});
            }
        })
    }
    return <LoginTemplate onUserLogin={onUserLogin}/>
}


export default Login;