import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    if (email && password) {
      router.push("/screens/MainScreen"); // Assuming your TabsNavigator is under the (tabs) folder
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Ionicons name="close" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Welcome back!</Text>

      <Text style={styles.label}>
        Email <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>
        Password <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleClick}>
        <TouchableOpacity onPress={() => router.push("/screens/SignUp")}></TouchableOpacity>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with:</Text>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={20} color="#DB4437" />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Entypo name="windows" size={20} color="#0078D4" />
        <Text style={styles.socialText}>Continue with Microsoft</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="apple1" size={20} color="black" />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <MaterialCommunityIcons name="slack" size={20} color="#4A154B" />
        <Text style={styles.socialText}>Continue with Slack</Text>
      </TouchableOpacity>

      {/* Footer Links */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.link}>Can't log in?</Text>
        </TouchableOpacity>
        <Text style={styles.dot}> • </Text>
        <TouchableOpacity onPress={() => router.push("/screens/SignUp")}>
          <Text style={styles.link}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    marginBottom: 5,
  },
  required: {
    color: "red",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: "#28a745",
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    fontWeight: "500",
    marginBottom: 15,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
  },
  socialText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  link: {
    color: "#0052CC",
    fontWeight: "500",
  },
  dot: {
    marginHorizontal: 5,
    color: "#aaa",
  },
});


