import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcomeText: {
        fontSize: 14,
        fontFamily: "Poppins_500Medium",
        color: "#D8D8D8"
    },
    credentials: {
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
        color: "#001833"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    iconsWrapper: {
        flexDirection: 'row',
        gap: 10
    },
    title: {
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
        color: "white",
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    row: {
        marginBottom: 20,
        paddingHorizontal: 20,
        gap: 10,
    },
    itemContainer: {
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        backgroundColor: "#F7F8FB",
        flex: 1,
        maxWidth: '50%'
    },
    image: {
        width: 114,
        height: 85,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#263238',
    },
})

export default styles