import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"; // Assuming you have @expo/vector-icons installed

export default function MainScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
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
        <Feather
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
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
        <View style={styles.clipboardIconContainer}>
          {/* Using a simple View as a placeholder for the clipboard icon */}
          <View style={styles.clipboardBase}></View>
          <View style={styles.clipboardClip}></View>
          <View style={styles.clipboardPaper}></View>
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

      {/* Recent Items Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent items</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50, // Adjust for status bar
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#9370DB", // Purple color
    justifyContent: "center",
    alignItems: "center",
  },
  profileIconText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createWorkItemButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#f0f0f0", // Light gray background for the button
  },
  createWorkItemText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  welcomeText: {
    fontSize: 30,
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
    marginBottom: 30,
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
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  editText: {
    fontSize: 14,
    color: "#007bff", // Blue color for "Edit"
  },
  quickAccessCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  clipboardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#e0e0e0", // Light gray for the clipboard background
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    position: "relative",
    overflow: "hidden", // To clip the paper part
  },
  clipboardBase: {
    width: "70%",
    height: "80%",
    backgroundColor: "#c0c0c0", // Darker gray for the clipboard base
    borderRadius: 5,
  },
  clipboardClip: {
    position: "absolute",
    top: 5,
    width: "40%",
    height: 10,
    backgroundColor: "#a0a0a0", // Even darker gray for the clip
    borderRadius: 2,
  },
  clipboardPaper: {
    position: "absolute",
    width: "50%",
    height: "60%",
    backgroundColor: "#fff", // White for the paper
    top: "20%",
    left: "25%",
    borderRadius: 3,
  },
  quickAccessTextContainer: {
    flex: 1,
  },
  personalizeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  personalizeDescription: {
    fontSize: 13,
    color: "#666",
    marginBottom: 10,
  },
  addItemsText: {
    fontSize: 14,
    color: "#8A2BE2", // Purple color for "Add items"
    fontWeight: "500",
  },
});
