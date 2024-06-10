import {Text, View, StyleSheet} from "react-native";
import {formatDate} from "../util/dateUtils";

export const Bridge = ({bridge}) => {

    const styles = StyleSheet.create({
        bridge: {
            marginVertical: 2,
            marginHorizontal: 2,
            paddingVertical: 2,
            paddingHorizontal: 8,
            fontWeight: 'bold',
            minHeight: 100
        },
        border: {
            borderWidth: 2,
            borderRadius: 3,
            borderColor: 'darkgrey'
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        infoContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        title: {
            fontSize: 34,
        },
        status: {
            fontSize: 26,
            color: bridge?.status === 'Open' ? 'red' : 'green'
        }
    });

    return (
        <View style={[styles.bridge, styles.border]}>
            <View style={styles.infoContainer}>
                <Text style={[styles.title]}>{bridge.name}</Text>
                <Text style={[styles.status]}>
                    {
                        bridge.status === 'Open' ? 'Up' : 'Down'
                    }
                </Text>
            </View>
            {
                bridge.lastOpen && bridge.lastClosed &&
                <View>
                    <Text>Last Open: {formatDate(bridge.lastOpen)}</Text>
                    <Text>Last Closed: {formatDate(bridge.lastClosed)}</Text>
                </View>
            }
        </View>
    )
}