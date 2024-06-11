import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Bridge} from "./Bridge";
import {useEffect, useState} from "react";
import {useBridges, useUserById} from "../util/queries";
import {Checkbox} from 'react-native-paper';
import {getCurrentUserId} from "../util/userUtils";

export const Bridges = () => {
    const [bridges, setBridges] = useState([]);
    const [favesToggle, setFavesToggle] = useState(false);
    const {data, isLoading} = useBridges();
    const {data: user} = useUserById(getCurrentUserId());
    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyItems: 'center',
            paddingVertical: 20
        },
        checkbox: {
            alignSelf: 'center',
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
        },
    })
    useEffect(() => {
        if (data) {
            setBridges(data)
        }
    }, [data]);
    const handleCheckboxChecked = () => {
        if (!favesToggle) {
            const newBridges = bridges.filter(bridge => user.favorites.includes(bridge._id));
            setBridges(newBridges);
        } else {
            setBridges(data);
        }
        setFavesToggle(!favesToggle);
    }
    if (isLoading) {
        return (
            <Text>Loading...</Text>
        )
    }
    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            {
                user && user.favorites &&
                <View style={[styles.checkboxContainer]}>
                    <Text>Toggle Favorites:</Text>
                    <Checkbox
                        status={favesToggle ? 'checked' : 'unchecked'}
                        onPress={handleCheckboxChecked}
                    />
                </View>
            }
            {
                bridges.map((bridge, index) => <Bridge key={index} bridge={bridge}/>)
            }
        </ScrollView>
    )
}