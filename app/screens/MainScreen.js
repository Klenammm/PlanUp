import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MainScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = false; // Force light mode

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileIconText}>K</Text>
          </View>
          <TouchableOpacity style={styles.createWorkItemButton}>
            <Text style={styles.createWorkItemText}>Create work item</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome Message */}
        <Text style={styles.welcomeText}>Hello Klenam</Text>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>

        {/* Quick Access Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick access</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickAccessCard}>
          <View style={styles.simpleClipboardIcon}>
            <Feather name="clipboard" size={28} color="#888" />
          </View>
          <View style={styles.quickAccessTextContainer}>
            <Text style={styles.personalizeTitle}>Personalize this space</Text>
            <Text style={styles.personalizeDescription}>
              Add your most important stuff here, for fast access.
            </Text>
            <TouchableOpacity>
              <Text style={styles.addItemsText}>Add items</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent items</Text>
        </View>

        {/* Add more recent items here */}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/screens/MainScreen")}>
          <Feather name="home" size={22} color="#9370DB" />
          <Text style={[styles.navText, { color: "#9370DB" }]}>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/screens/ProjectScreen")}>
          <Feather name="send" size={22} color="#888" />
          <Text style={styles.navText}>Project</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/screens/AllWork")}>
          <AntDesign name="pluscircleo" size={22} color="#888" />
          <Text style={styles.navText}>AllWork</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/screens/DashboardScreen")}>
          <Feather name="grid" size={22} color="#888" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/screens/NotificationScreen")}>
          <Feather name="bell" size={22} color="#888" />
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#9370DB",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIconText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createWorkItemButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
  },
  createWorkItemText: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 25,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },
  editText: {
    fontSize: 14,
    color: "#007bff",
  },
  quickAccessCard: {
    flexDirection: "row",
    backgroundColor: "#faf8ff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  simpleClipboardIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  quickAccessTextContainer: {
    flex: 1,
  },
  personalizeTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  personalizeDescription: {
    fontSize: 13,
    color: "#666",
    marginBottom: 5,
  },
  addItemsText: {
    fontSize: 13,
    color: "#8A2BE2",
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 3,
    color: "#888",
  },
});

