import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
  const router = useRouter();
  const timeAgo = "36 min ago";

  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.heading}>Dashboards</Text>

      {/* Assigned to Me */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Assigned to Me</Text>
        <Text style={styles.cardText}>
          You currently have no work assigned to you.{"\n"}Enjoy your day!
        </Text>
        <View style={styles.cardFooter}>
          <Ionicons name="refresh-outline" size={16} color="#777" />
          <Text style={styles.timeText}>{timeAgo}</Text>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Projects</Text>
        <View style={styles.projectRow}>
          <View style={styles.projectIcon}>
            <Text style={styles.projectIconText}>🎨</Text>
          </View>
          <View style={styles.projectInfo}>
            <Text style={styles.projectName}>Klenam</Text>
            <Text style={styles.projectRole}>Lead</Text>
          </View>
          <View style={styles.userBubble}>
            <Text style={styles.userInitial}>K</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <Ionicons name="refresh-outline" size={16} color="#777" />
          <Text style={styles.timeText}>{timeAgo}</Text>
        </View>
      </View>

      {/* Activity Stream */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Activity Stream</Text>
        <Text style={styles.cardText}>No recent activity found.</Text>
        <View style={styles.cardFooter}>
          <Ionicons name="refresh-outline" size={16} color="#777" />
          <Text style={styles.timeText}>{timeAgo}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#F6F5F9",
  },
  backButton: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#444",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  timeText: {
    marginLeft: 6,
    fontSize: 12,
    color: "#777",
  },
  projectRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 12,
  },
  projectIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#D9D2F9",
    alignItems: "center",
    justifyContent: "center",
  },
  projectIconText: {
    fontSize: 20,
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontSize: 15,
    fontWeight: "600",
  },
  projectRole: {
    fontSize: 13,
    color: "#666",
  },
  userBubble: {
    backgroundColor: "#2E7D32",
    borderRadius: 50,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  userInitial: {
    color: "#fff",
    fontWeight: "600",
  },
});


