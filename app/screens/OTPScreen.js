import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

export default function OTPScreen() {
  const router = useRouter();
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [inputOTP, setInputOTP] = useState("");

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    Alert.alert("OTP Generated", `Your OTP is: ${otp}`);
  };

  const verifyOTP = () => {
    if (inputOTP === generatedOTP) {
      Alert.alert("Success", "OTP Verified!");
      router.replace("/screens/MainScreen"); // Navigate to home/dashboard
    } else {
      Alert.alert("Error", "Incorrect OTP");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="6-digit code"
        keyboardType="numeric"
        maxLength={6}
        value={inputOTP}
        onChangeText={setInputOTP}
      />
      <TouchableOpacity style={styles.button} onPress={verifyOTP}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={generateOTP}>
        <Text style={styles.linkText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: "#007bff",
    fontSize: 14,
  },
});
