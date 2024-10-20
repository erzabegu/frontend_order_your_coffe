import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    backButton: {
        marginLeft: 26,
    },
    container: {
        paddingHorizontal: 40,
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 50,
        position: 'relative',
    },
    title: {
        fontFamily: "Poppins_500Medium",
        fontSize: 22,
    },
    subTitle: {
        fontFamily: "Poppins_400Normal",
        fontSize: 16,
        color: '#AAAAAA',
        marginTop: 20,
        marginBottom: 50,
    },
    form: {
        gap: 30
    },
    forgotPassword: {
        textAlign: "center",
        color: "#324A59",
        fontFamily: "Poppins_500Medium",
        marginTop: 30
    },
    nextPrevButton: {
        position: 'absolute',
        bottom: 250,
        right: 40
    }

})

export default styles