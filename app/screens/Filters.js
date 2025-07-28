import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Ionicons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Filter items with icons
const filters = [
  { title: "All work items", icon: <Ionicons name="ios-grid" size={20} color="#333" /> },
  { title: "Created recently", icon: <Ionicons name="time-outline" size={20} color="#333" /> },
  { title: "Done work items", icon: <Ionicons name="checkmark-done" size={20} color="#333" /> },
  { title: "My open work items", icon: <Ionicons name="person-outline" size={20} color="#333" /> },
  { title: "Open work items", icon: <Ionicons name="mail-outline" size={20} color="#333" /> },
  { title: "Reported by me", icon: <Ionicons name="alert-circle-outline" size={20} color="#333" /> },
  { title: "Resolved recently", icon: <Ionicons name="checkmark-circle-outline" size={20} color="#333" /> },
  { title: "Updated recently", icon: <Ionicons name="trending-up-outline" size={20} color="#333" /> },
  { title: "Viewed recently", icon: <Ionicons name="eye-outline" size={20} color="#333" /> },
];

export default function FiltersScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="add" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Filters</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Section title */}
      <Text style={styles.sectionTitle}>Default filters</Text>

      {/* Filter list */}
      <FlatList
        data={filters}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.itemText}>{item.title}</Text>
            <Ionicons name="star-outline" size={18} color="#888" style={styles.starIcon} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  headerText: {
    fontSize: 18,
    color: "#222",
    fontWeight: "600",
  },
  doneText: {
    color: "#333",
    fontSize: 16,
  },
  sectionTitle: {
    color: "#777",
    fontSize: 14,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 28,
    alignItems: "center",
  },
  itemText: {
    flex: 1,
    color: "#222",
    fontSize: 15,
    marginLeft: 10,
  },
  starIcon: {
    marginRight: 5,
  },
});

