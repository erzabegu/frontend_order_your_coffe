import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    title: {
        fontFamily: "Poppins_500Medium",
        fontSize: 18,
        color: "#001833",
        marginTop: 30,
        marginBottom: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#F7F8FB',
        marginBottom: 8,
        borderRadius: 12,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 16,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDescription: {
        color: '#888',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    deleteButton: {
        backgroundColor: '#ffcccc',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: '100%',
        borderRadius: 12,
    },
    deleteText: {
        fontSize: 24,
        color: '#ff4d4d',
    },
})

export default styles