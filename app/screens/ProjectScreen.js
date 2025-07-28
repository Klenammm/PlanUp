import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProjectScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={28} color="#333" />
        </TouchableOpacity>
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

      {/* Folder Image */}
      <View style={styles.folderImageContainer}>
        <Image
          source={require("../../assets/project.png")}
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
      <TouchableOpacity
        style={styles.createProjectButton}
        onPress={() => router.push("/screens/Project")}
      >
        <Text style={styles.createProjectButtonText}>Create project</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
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
    backgroundColor: "#9370DB",
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
    marginBottom: 50,
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
    marginBottom: 5,
  },
  folderImage: {
    width: 200,
    height: 150,
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
    backgroundColor: "#9370DB",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: "center",
  },
  createProjectButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

