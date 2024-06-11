import {Button, View, StyleSheet, Text} from "react-native";
import {Link} from "expo-router";
import {getCurrentUserId} from "../util/userUtils";
import {useUserById} from "../util/queries";
import {useEffect, useState} from "react";

export const Navbar = () => {
    const [token, setToken] = useState();
    const {data} = useUserById(getCurrentUserId());

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, []);
    return (
        <View style={[styles.container]}>
            {
                token && data &&
                <Text>Welcome {data.firstName}</Text>
            }
            <View style={styles.loginButton}>
                <Link href={{pathname: token ? 'logout' : 'login'}}>
                    <Button title={token ? 'logout' : 'login'}/>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        justifyContent: 'flex-end',
        minHeight: 50,
        maxHeight: 50
    },
    loginButton: {
        padding: 20
    },
});