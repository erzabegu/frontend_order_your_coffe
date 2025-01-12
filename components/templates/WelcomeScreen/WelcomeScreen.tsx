import { View, Text, Image, SafeAreaView } from "react-native";
import styles from './WelcomeScreen.styles';
import { NextScreenButton } from "@/components/atoms";
import { useRouter } from "expo-router";

const Dots = () => (
    <View style={styles.dotsWrapper}>
        <View style={styles.ellipse}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
    </View>
);

const WelcomeScreenTemplate = () => {
    const router = useRouter();

    const handleNextScreen = () => {
        router.push("/login")
        // router.push('/coffeeType/coffeeShop');
        // router.push('/singleShop/1/singleCoffe/1/myorder')
    };

    return (
        <SafeAreaView style={styles.welcomeScreen}>
            <View style={styles.magicCoffeeContainer}>
                <Image
                    source={require("../../../assets/images/magicCoffeeLogo.png")}
                    style={styles.magicImage}
                    accessible={true}
                    accessibilityLabel="Magic Coffee Logo"
                />
                <Text style={styles.magicText}>Magic Coffee</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Feel yourself like a barista!</Text>
                <Text style={styles.subtitle}>Magic coffee on order.</Text>
                <Dots />
            </View>
            <View style={styles.navigationButton}>
                <NextScreenButton onPress={handleNextScreen} />
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreenTemplate;
