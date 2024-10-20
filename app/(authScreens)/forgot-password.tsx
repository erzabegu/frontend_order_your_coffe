import ForgotPasswordTemplate from "@/components/templates/ForgotPassword";
import {AuthService} from "@/services/authService";
import Toast from "react-native-root-toast";
import {useRouter} from "expo-router";
import {AxiosError} from "axios";

const ForgotPassword = () => {

    const router = useRouter();
    const sendCode = (data: { email: string }) => {
        AuthService.sendCode(data?.email).then(() => {
            router.push('/one-time-password')
        }).catch((err) => {
            console.log(err, "Err")
            if (err instanceof AxiosError) {
                Toast.show(err?.message, {backgroundColor: 'red'})
            } else {
                Toast.show(err, {backgroundColor: 'red'});
            }
        })
    }
    return <ForgotPasswordTemplate sendCode={sendCode}/>
}


export default ForgotPassword;