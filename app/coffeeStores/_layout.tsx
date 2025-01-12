import {Stack, Tabs} from "expo-router";
import {RootSiblingParent} from "react-native-root-siblings";

export const CoffeeStores = () => {
    return <>
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="coffeeStores" options={{headerShown: false}}/>
        </Stack>
    </>
}

export default CoffeeStores;