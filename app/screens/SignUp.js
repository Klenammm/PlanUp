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
  FontAwesome,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSignUp = () => {
    if (email) {
      Alert.alert("Success", "Signed up with: " + email);
      router.replace("/screens/OTPScreen"); // or push("/(tabs)") based on flow
    } else {
      Alert.alert("Error", "Please enter your email");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign up to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.termsText}>
        By signing up, I accept the Atlassian Cloud Terms of Service and
        acknowledge the Privacy Policy
      </Text>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with:</Text>

      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={20} color="#DB4437" />
        <Text style={styles.socialText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Entypo name="windows" size={20} color="#0078D4" />
        <Text style={styles.socialText}>Microsoft</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="apple1" size={20} color="black" />
        <Text style={styles.socialText}>Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <MaterialCommunityIcons name="slack" size={20} color="#4A154B" />
        <Text style={styles.socialText}>Slack</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerBrand}>© ATLASSIAN</Text>
        <Text style={styles.footerLegal}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  termsText: {
    fontSize: 13,
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  signupButton: {
    backgroundColor: "#00A3E0",
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
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
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  footerBrand: {
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 5,
  },
  footerLegal: {
    fontSize: 11,
    textAlign: "center",
    color: "#888",
  },
});
