import {Redirect} from "expo-router";
import {useEffect} from "react";

export default function logout() {
    useEffect(() => {
        logout();
    }, []);
    const logout = () => {
        localStorage.removeItem('token');
    }

    return (
        <Redirect href={'/'}/>
    )
}