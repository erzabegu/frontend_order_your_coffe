import NewPasswordTemplate from "../../components/templates/NewPassword";
import {AuthService} from "@/services/authService";
import useUserStore from "@/store/useUserStore";
import Toast from "react-native-root-toast";

const NewPassword = () => {
    const {userEmail} = useUserStore()
    const onPasswordChange = (data: { password: string }) => {
        AuthService.resetPassword(userEmail, data?.password).then(() => {
            Toast.show("Success", {backgroundColor: 'green'})
        }).catch((err) => {
            Toast.show(err?.message, {backgroundColor: 'red'})
        })
    }
    return <NewPasswordTemplate updatePassword={onPasswordChange}/>
}
export default NewPassword;