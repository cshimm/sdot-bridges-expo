import {StyleSheet, Text, View} from 'react-native';
import {Bridges} from "./components/Bridges";
import {Navbar} from './components/Navbar';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function App() {
    const queryClient = new QueryClient();
    return (
        <View style={styles.container}>
            <QueryClientProvider client={queryClient}>
                <Navbar/>
                <Bridges/>
            </QueryClientProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
