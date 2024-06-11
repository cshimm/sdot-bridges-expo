import { StyleSheet, Text, View } from "react-native";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Navbar} from "../components/Navbar";
import {Bridges} from "../components/Bridges";

export default function Page() {
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
    // alignItems: "center",
    // padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
