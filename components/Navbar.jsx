import {Button, View, StyleSheet, Text} from "react-native";
import {Link} from "expo-router";
import {getCurrentUserId} from "../util/userUtils";
import {useUserById} from "../util/queries";
import {useEffect, useState} from "react";
import {FontAwesome6} from '@expo/vector-icons';

export const Navbar = () => {
    const [token, setToken] = useState();
    const {data} = useUserById(getCurrentUserId());

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, []);
    return (
        <View style={[styles.container]}>
            <View style={{padding: 20}}>
                <FontAwesome6 size={40} color={'black'} name={'bridge'}/>
            </View>
            <Text style={[styles.title]}>Is the bridge up?</Text>
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
        justifyContent: 'space-between',
        minHeight: 50,
        maxHeight: 50
    },
    loginButton: {
        padding: 20
    },
    title: {
        fontSize: 24,
        justifyItems: 'center'
    }
});