import {Text, View, Pressable} from "react-native";
import {formatDate} from "../util/dateUtils";
import {FontAwesome} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {bridgeStyles as styles} from "../styles/bridgeStyles";
import {useUserById} from "../util/queries";
import {getCurrentUserId} from "../util/userUtils";

const URL = process.env.EXPO_PUBLIC_API_URI;
export const Bridge = ({bridge}) => {
    const [token, setToken] = useState();
    const [isFave, setIsFave] = useState(false)
    const {data: user, refetch} = useUserById(getCurrentUserId());
    useEffect(() => {
        setToken(localStorage.getItem('token'));
        if (user && user.favorites)
            setIsFave(user.favorites.includes(bridge._id));
    }, [bridge]);
    const handleFavoritePressed = async () => {
        let updatedFavorites = [...user.favorites];
        if (isFave) {
            const bridgeIndex = updatedFavorites.indexOf(bridge._id);
            if (bridgeIndex !== -1) {
                updatedFavorites.splice(bridgeIndex, 1);
            }
        } else {
            updatedFavorites.push(bridge._id);
        }
        setIsFave(!isFave);
        const response = await fetch(`${URL}/api/users/update/${user.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                favorites: updatedFavorites
            })
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }
        await refetch();
    }
    return (
        <View style={[styles.container, styles.bridge, styles.border]}>
            <View style={styles.infoContainer}>
                <Text style={[styles.title]}>{bridge.name}</Text>
                {
                    token &&
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