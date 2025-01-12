import {Stack} from "expo-router";

const SingleCoffeeLayout = () => {
    return <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="assemblage"/>
    </Stack>
}
export default SingleCoffeeLayout