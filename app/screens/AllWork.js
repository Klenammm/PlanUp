import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import { useRouter } from "expo-router";

export default function AllWorkScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#222" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Avatar
            size={40}
            rounded
            title="K"
            containerStyle={{ backgroundColor: "#4CAF50" }}
          />
          <Text style={styles.title}>Work items</Text>
        </View>

        <View style={styles.headerIcons}>
         
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/screens/Item")}>
            <Feather name="plus" size={28} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Viewed Recently (navigates to filters screen) */}
      <TouchableOpacity
        style={styles.viewedCard}
        onPress={() => router.push("/screens/Filters")}
      >
        <View style={styles.cardLeft}>
          <Ionicons name="eye-outline" size={24} color="#333" />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.cardTitle}>Viewed recently</Text>
            <Text style={styles.cardSubtext}>0 results</Text>
          </View>
        </View>
        <Feather name="chevron-down" size={20} color="#333" />
      </TouchableOpacity>

      {/* Toggle Tabs */}
      <View style={styles.toggleTabs}>
        <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}>
          <Text style={styles.tabTextActive}>Detailed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>List</Text>
        </TouchableOpacity>
      </View>

      {/* Empty State */}
      <View style={styles.emptyState}>
        <Ionicons name="search" size={64} color="#bbb" />
        <Text style={styles.emptyText}>Nothing found</Text>
        <Text style={styles.emptySubtext}>Please select a different filter.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 8,
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 16,
  },
  viewedCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  cardSubtext: {
    fontSize: 14,
    color: "#777",
  },
  toggleTabs: {
    flexDirection: "row",
    backgroundColor: "#E8EAF6",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 24,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#C5CAE9",
  },
  tabText: {
    color: "#555",
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#000",
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444",
    marginTop: 20,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#888",
    marginTop: 8,
  },
});