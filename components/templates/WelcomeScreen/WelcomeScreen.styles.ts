import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    welcomeScreen: {
        flex: 1,
        position: 'relative',
    },
    magicCoffeeContainer: {
        height: height * 0.4,
        backgroundColor: "#324A59",
        marginTop: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    magicImage: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
    },
    magicText: {
        fontFamily: "ReenieBeanie_400Regular",
        fontSize: 64,
        color: 'white',
    },
    contentContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
        gap: 10,
    },
    title: {
        color: "#181D2D",
        fontFamily: "Poppins_400Regular",
        fontSize: 28,
        maxWidth: 239,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#AAAAAA",
    },
    dotsWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 30,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: "#324A5933",
    },
    ellipse: {
        backgroundColor: "#324A59",
        height: 10,
        width: 33,
        borderRadius: 50,
    },
    navigationButton: {
        position: 'absolute',
        bottom: 60,
        right: 40,
    },
});

export default styles;
