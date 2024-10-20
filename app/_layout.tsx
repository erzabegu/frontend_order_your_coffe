import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {ReenieBeanie_400Regular} from '@expo-google-fonts/reenie-beanie';
import {Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';
import {Stack} from "expo-router";
import {RootSiblingParent} from 'react-native-root-siblings';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ReenieBeanie_400Regular,
        Poppins_400Regular,
        Poppins_500Medium,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <RootSiblingParent>
                <Stack>
                    <Stack.Screen name={"index"} options={{headerShown: false}}/>
                    <Stack.Screen name="(authScreens)" options={{headerShown: false}}/>
                    <Stack.Screen name="+not-found"/>
                </Stack>
            </RootSiblingParent>
        </>
    );
}
