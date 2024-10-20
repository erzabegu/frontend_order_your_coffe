import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0',
        paddingVertical: 8,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        color: '#001F3F',
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#C1C7D0',
        marginHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        fontFamily: "Poppins_500Medium",
    },
    errorMessage: {
        position: 'absolute',
        bottom: -20,
        color: 'red'
    }
});
export default styles;