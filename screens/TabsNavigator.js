import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens
import MainScreen from "./MainScreen";
import ProjectScreen from "./ProjectScreen";
import AllWork from "./AllWork";
import DashboardScreen from "./DasboardScreen";
import NotificationScreen from "./NotificationScreen";

// Optional: import icons
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Main") iconName = "home-outline";
          else if (route.name === "Project") iconName = "rocket-outline";
          else if (route.name === "AllWork") iconName = "add-circle-outline";
          else if (route.name === "Dashboard") iconName = "grid-outline";
          else if (route.name === "Notification")
            iconName = "notifications-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Project"
        component={ProjectScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="AllWork" component={AllWork} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
