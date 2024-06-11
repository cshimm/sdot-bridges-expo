import {ScrollView, StyleSheet} from "react-native";
import {Bridge} from "./Bridge";
import {useEffect, useState} from "react";
import {useBridges} from "../util/queries";

export const Bridges = () => {
    const [bridges, setBridges] = useState([]);
    const {data} = useBridges();
    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyItems: 'center',
            paddingVertical: 20
        }
    })
    useEffect(() => {
        if (data) {
            setBridges(data)
        }
    }, [data]);
    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            {
                bridges.map((bridge, index) => <Bridge key={index} bridge={bridge}/>)
            }
        </ScrollView>
    )
}