import {StyleSheet, Text, View} from 'react-native';
import {Bridges} from "./components/Bridges";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Bridges/>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
