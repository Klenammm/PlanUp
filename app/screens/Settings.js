import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // ✅ Expo Router

export default function NotificationSettingsScreen() {
  const router = useRouter(); // ✅ Initialize router

  const [settings, setSettings] = useState({
    mentions: false,
    watching: false,
    assigned: false,
    reported: false,
    newWork: false,
    approvalRequests: false,
  });

  const toggleSwitch = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Manage notifications</Text>
      <Text style={styles.subHeader}>PUSH NOTIFICATIONS</Text>

      {/* Mentions with Recommended */}
      <View style={styles.item}>
        <View style={styles.iconLabel}>
          <Ionicons name="at" size={24} color="#3366FF" />
          <View style={styles.label}>
            <View style={styles.labelRow}>
              <Text style={styles.title}>Mentions</Text>
              <Text style={styles.recommended}>Recommended</Text>
            </View>
            <Text style={styles.description}>When someone @mentions you</Text>
          </View>
        </View>
        <Switch
          value={settings.mentions}
          onValueChange={() => toggleSwitch("mentions")}
        />
      </View>

      {/* Other Items */}
      <Item
        icon={<Ionicons name="eye-outline" size={24} color="#3366FF" />}
        title="Watching"
        description="Updates on work items you’re watching"
        value={settings.watching}
        onValueChange={() => toggleSwitch("watching")}
      />

      <Item
        icon={<Ionicons name="person-outline" size={24} color="#3366FF" />}
        title="Assigned"
        description="Updates on work items assigned to you"
        value={settings.assigned}
        onValueChange={() => toggleSwitch("assigned")}
      />

      <Item
        icon={<Ionicons name="create-outline" size={24} color="#3366FF" />}
        title="Reported"
        description="Updates on work items you created"
        value={settings.reported}
        onValueChange={() => toggleSwitch("reported")}
      />

      <Item
        icon={<FontAwesome name="folder-open" size={24} color="#3366FF" />}
        title="New work"
        description="New work items created in select projects"
        value={settings.newWork}
        onValueChange={() => toggleSwitch("newWork")}
      />

      <Item
        icon={<MaterialIcons name="approval" size={24} color="#3366FF" />}
        title="Approval requests"
        description="When someone adds you as an approver"
        value={settings.approvalRequests}
        onValueChange={() => toggleSwitch("approvalRequests")}
      />

      <Text style={styles.footer}>
        These settings will not impact PlanUp on the web.
      </Text>
    </ScrollView>
  );
}

function Item({ icon, title, description, value, onValueChange }) {
  return (
    <View style={styles.item}>
      <View style={styles.iconLabel}>
        {icon}
        <View style={styles.label}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Light mode background
    padding: 16,
  },
  backButton: {
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subHeader: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  label: {
    marginLeft: 12,
    flexShrink: 1,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  recommended: {
    backgroundColor: "#D0E8D0",
    color: "#2E7D32",
    fontSize: 10,
    fontWeight: "600",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
  footer: {
    marginTop: 24,
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});
