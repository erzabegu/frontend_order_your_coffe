import {StyleSheet} from "react-native";
import {rgbaColor} from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    wrapper: {
        marginHorizontal: 25
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20
    },
    title: {
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
        color: "#001833"
    },
    coffeeImage: {
        backgroundColor: "#F7F8FB",
        justifyContent: "center",
        alignItems: 'center',
        height: 146,
        borderRadius: 12,
        marginTop: 20,
        marginBottom: 10
    },
    propertyWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#F4F5F7",
        borderStyle: 'solid'
    },
    propertyTitle: {
        fontFamily: "Poppins_500Medium",
        color: "#001833",
        fontSize: 16,
    },
    amount: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 90,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: 'rgba(216, 216, 216, 0.4)',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    ristrettoContainer: {
        flexDirection: 'row',
        gap: 10
    },
    ristrettoAmount: {
        display: 'flex',
        justifyContent: 'center',
        width: 90,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: 'rgba(216, 216, 216, 0.4)',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    activeRistretto: {
        borderColor: "black",
    },
    onSiteContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    volumeContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'flex-end',
    },
    certainTimeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
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
    totalWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 20
    },
    submitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#324A59',
        borderRadius: 30,
        paddingVertical: 20
    },
    nextTitle: {
        fontFamily: 'Poppins_600SemiBold',
        color: "white",
        fontSize: 16,
    },
    sliderWrapper: {
        flexDirection: 'column',
        gap: 5
    },
    sliderDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    coffeeSlider: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#F4F5F7",
        borderStyle: 'solid',
        paddingVertical: 20,
    },
    sliderTitle: {
        fontFamily: "Poppins_500Medium",
        color: "#001833",
        fontSize: 16,
        marginTop: 10
    },
    sliderDescriptionTitle: {
        fontFamily: "Poppins_500Medium",
        color: "#D8D8D8",
        fontSize: 16,
    }
})

export default styles