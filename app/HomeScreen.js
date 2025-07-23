import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Image
        source={require("../assets/home_pic.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Plan and track bugs, support tickets, and more
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.signUpButton]}
        onPress={() => router.push("/screens/SignUp")}
      >
        <Text style={[styles.buttonText, { color: "#fff" }]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: "#1e1e1e",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});

