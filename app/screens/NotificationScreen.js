import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
        </View>

        {/* Settings */}
        <TouchableOpacity onPress={() => router.push("/screens/Settings")}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Notifications</Text>

      {/* Tab Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Direct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Unread</Text>
        </TouchableOpacity>
      </View>

      {/* Notification Image */}
      <Image
        source={require("../../assets/notification.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Message */}
      <Text style={styles.subtitle}>Know on the go</Text>
      <Text style={styles.description}>
        Allow push notifications and follow{"\n"}important activity on your work.
      </Text>

      {/* Push Notification Link */}
      <TouchableOpacity>
        <Text style={styles.link}>Turn on push notifications</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#A020F0",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 120,
    alignSelf: "center",
    marginVertical: 40,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginTop: 10,
  },
  link: {
    color: "blue",
    textAlign: "center",
    marginTop: 15,
    fontSize: 15,
  },
});
