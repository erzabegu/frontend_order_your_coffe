import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        height: 250,
    },
    storesContainer: {
        backgroundColor: "white",
        width: "100%",
        borderRadius: 25,
        padding: 30,
        gap: 10,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    safeArea: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    store: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 48,
    },
    storeName: {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white'
    },
    storeWrapper: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    bottomSheetButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 2,
    },
    bottomSheetButtonText: {
        fontWeight: 600,
        textDecorationLine: 'underline',
    },
});

export default styles;