import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        gap:20
    },
    otpInput: {
        width: 48,
        height: 61,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#F7F8FB',
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#F7F8FB',
    },
});


export default styles