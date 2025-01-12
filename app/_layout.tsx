import React, {useEffect} from 'react';
import {Stack, useRouter, useSegments} from 'expo-router';
import {QueryClientProvider} from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import useAuthStore from '@/store/useAuthStore';
import {queryClient} from '@/config/queryClientConfig';
import {ReenieBeanie_400Regular} from "@expo-google-fonts/reenie-beanie";
import {Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold} from "@expo-google-fonts/poppins";
import {AuthProvider, useAuth} from "@/store/AuthContext";

SplashScreen.preventAutoHideAsync();
const AuthContent = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // @ts-ignore
        const inAuthGroup = segments.includes("coffeeStores");
        if (inAuthGroup && !isAuthenticated) {
            router.replace('/');
        } else { // @ts-ignore
            if (segments.includes("(authScreens)") && isAuthenticated) {
                router.replace('/coffeeStores/coffeeStores');
            }
        }
    }, [isAuthenticated, segments]);

    return (
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(authScreens)" options={{headerShown: false}}/>
                <Stack.Screen name="singleShop/[shop_id]" options={{headerShown: false}}/>
                <Stack.Screen name="coffeeStores" options={{headerShown: false}}/>
                <Stack.Screen name="coffeeType" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
            </Stack>
        </QueryClientProvider>
    );
};

const AuthWrapper = () => (
    <AuthProvider>
        <AuthContent/>
    </AuthProvider>
);

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ReenieBeanie_400Regular,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <AuthWrapper/>;
}
