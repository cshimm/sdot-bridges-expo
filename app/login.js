import {Button, StyleSheet, Text, View} from "react-native";
import {Input} from "react-native-elements";
import {Controller, useForm} from "react-hook-form";
import {useRouter} from "expo-router";

const URL = process.env.EXPO_PUBLIC_API_URI
export default function login() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit = async data => {
        const {email, password} = data;
        const response = await fetch(`${URL}/api/auth/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (!response.ok){
            throw new Error(await response.text());
        }
        const {token} = await response.json();
        localStorage.setItem("token", token);
        router.replace('/')
    };
    return (
        <View style={styles.container}>
            <Text h3 style={styles.title}>Sign In</Text>
            <Controller
                control={control}
                rules={{ required: 'Email is required' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value || ''}
                        errorMessage={errors.email && errors.email.message}
                    />
                )}
                name="email"
            />
            <Controller
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value || ''}
                        errorMessage={errors.password && errors.password.message}
                    />
                )}
                name="password"
            />

            <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        textAlign: 'center',
        marginBottom: 24,
    },
});