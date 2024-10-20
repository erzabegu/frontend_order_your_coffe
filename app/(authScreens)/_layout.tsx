import {Stack} from "expo-router";

export const AuthLayout = () => {
    return <Stack>
        <Stack.Screen name="login" options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="register" options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="forgot-password" options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="one-time-password" options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="new-password" options={{
            headerShown: false,
        }}/>
    </Stack>
}

export default AuthLayout;