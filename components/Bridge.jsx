import {Text, View, Pressable} from "react-native";
import {formatDate} from "../util/dateUtils";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import {bridgeStyles as styles} from "../styles/bridgeStyles";

export const Bridge = ({bridge}) => {
    const [isFave, setIsFave] = useState(false)

    const handleFavoritePressed = () => {
        setIsFave(!isFave);
    }
    return (
        <View style={[styles.container, styles.bridge, styles.border]}>
            <View style={styles.infoContainer}>
                <Text style={[styles.title]}>{bridge.name}</Text>
                {

                    <Pressable style={[styles.faveButton]} onPress={handleFavoritePressed}>
                        <FontAwesome name={`star${isFave ? '' : '-o'}`} size={30} color="#ffd700"/>
                    </Pressable>
                }
            </View>
            <View style={[styles.statusContainer]}>
                <Text style={[styles.status, {color: bridge?.status === 'Open' ? 'red' : 'green',}]}>
                    {
                        bridge.status === 'Open' ? 'Up' : 'Down'
                    }
                </Text>
                {
                    bridge.lastOpen && bridge.lastClosed &&
                    <View>
                        <Text>Last Open: {formatDate(bridge.lastOpen)}</Text>
                        <Text>Last Closed: {formatDate(bridge.lastClosed)}</Text>
                    </View>
                }
            </View>
        </View>
    )
}