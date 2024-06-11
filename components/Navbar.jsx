import {Button, View, StyleSheet} from "react-native";

export const Navbar = () => {
    return (
        <View style={[styles.container]}>
            <View style={styles.loginButton}>
                <Button title={"login"}/>
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
        justifyContent:'flex-end'
    },
    loginButton: {
        padding: 20
    },
});