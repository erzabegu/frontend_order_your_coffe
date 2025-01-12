import OneTimePasswordTemplate from "@/components/templates/OneTimePassword";
import useUserStore from "@/store/useUserStore";
import {AuthService} from "@/services/authService";
import Toast from "react-native-root-toast";
import {useRouter} from "expo-router";

const OneTimePassword = () => {
    const router = useRouter();
    const {userEmail} = useUserStore();

    const onVerifyOneTimePassword = (code: string) => {
        AuthService.verifyCode(userEmail, code).then((res) => {
            router.push("/new-password");
        }).catch((err) => {
            Toast.show(err?.message, {backgroundColor: 'red'})
        })

    }
    return <OneTimePasswordTemplate onVerifyOneTimePassword={onVerifyOneTimePassword}/>
}

export default OneTimePassword;