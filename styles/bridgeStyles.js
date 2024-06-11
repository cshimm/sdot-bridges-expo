import {StyleSheet} from "react-native";

export const bridgeStyles = StyleSheet.create({
    bridge: {
        marginVertical: 2,
        marginHorizontal: 2,
        paddingVertical: 2,
        paddingHorizontal: 8,
        fontWeight: 'bold',
        minHeight: 120,
        maxHeight: 120
    },
    border: {
        borderWidth: 2,
        borderRadius: 3,
        borderColor: 'darkgrey'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 32,
    },
    status: {
        fontSize: 26,
        justifyItems:'flex-end'
    },
    statusContainer: {
        minWidth: 150
    },
    faveButton: {
        width: 'fit-content'
    }
});