import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // Assuming you have @expo/vector-icons installed

export default function ProjectScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>K</Text>
        </View>
        <TouchableOpacity>
          <Feather name="plus" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Projects Title */}
      <Text style={styles.projectsTitle}>Projects</Text>

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
          placeholder="Search projects"
          placeholderTextColor="#888"
        />
      </View>

      {/* Folder Image (Placeholder) */}
      {/* In a real app, you might use a local asset or an SVG component */}
      <View style={styles.folderImageContainer}>
        {/* Placeholder for the folder image. You could replace this with an actual image or SVG. */}
        <Image
          source={require("../assets/project.png")} // Placeholder image
          style={styles.folderImage}
          onError={(e) =>
            console.log("Image failed to load:", e.nativeEvent.error)
          }
        />
      </View>

      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome to Klenam</Text>
      <Text style={styles.instructionText}>
        To get started, create a project.
      </Text>

      {/* Create Project Button */}
      <TouchableOpacity style={styles.createProjectButton}>
        <Text style={styles.createProjectButtonText}>Create project</Text>
      </TouchableOpacity>
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
  projectsTitle: {
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
    marginBottom: 50, // Increased margin to push content down
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  folderImageContainer: {
    alignItems: "center",
    marginBottom: 5, // Increased margin
  },
  folderImage: {
    width: 200, // Adjust as needed
    height: 150, // Adjust as needed
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  instructionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  createProjectButton: {
    backgroundColor: "#9370DB", // Purple color for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: "center", // Center the button horizontally
  },
  createProjectButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
