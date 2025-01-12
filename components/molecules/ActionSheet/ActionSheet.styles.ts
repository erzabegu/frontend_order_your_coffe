import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        zIndex: 99999
    },
    label: {
        fontSize: 18,
        marginBottom: 10,

    },
    dropdown: {
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        width: 200,
        alignItems: 'center',
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContainer: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    modalTitle: {
        fontSize: 16,
        padding: 10,
        color: '#c8c5c5',
        fontFamily: 'Poppins_500SemiBold',
    },
    option: {
        padding: 15,
        fontSize: 16,
        color: '#c8c5c5',
        fontFamily: 'Poppins_500SemiBold',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#acabab',
    },
    cancelOption: {
        padding: 15,
        fontSize: 16,
        color: '#c8c5c5',
        fontFamily: 'Poppins_500SemiBold',
        justifyContent: 'center',
        alignContent: 'center',
        width: '95%',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        marginBottom: 20
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    cancelOptionText: {
        fontSize: 16,
        color: '#333',
        padding: 15,
        fontFamily: 'Poppins_600SemiBold',
    }

});

export default styles;