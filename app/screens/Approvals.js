import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ApprovalScreen = () => {
  const router = useRouter();

  // Tabs with routes for navigation
  const tabs = [
    { label: 'Summary', route: '/screens/Summary' },
    { label: 'Board', route: '/screens/Board' },
    { label: 'All Work', route: '/screens/Work' },
    { label: 'Calendar', route: '/screens/Calendar' },
    { label: 'Approvals', route: '/screens/Approvals' }, // Current screen
    { label: 'Forms', route: '/screens/Forms' },
    { label: 'Settings', route: '/screens/Setting' },
  ];

  return (
    <View style={styles.container}>
      {/* Top Appbar */}
      <Appbar.Header style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Appbar.Content title="Klenam" titleStyle={{ color: '#fff', fontWeight: 'bold' }} />
      </Appbar.Header>

      {/* Scrollable Tabs with Navigation */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabWrapper}
            onPress={() => {
              if (tab.route !== '/approvals') router.push(tab.route); // Prevent navigating to same screen
            }}
          >
            <Text style={[styles.tabText, tab.label === 'Approvals' && styles.activeTab]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Empty State Content */}
      <View style={styles.emptyContainer}>
        <Image
          source={require('../../assets/empty-approvals.png')} // Replace with your image
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>No approvals pending</Text>
        <Text style={styles.subtitle}>Find all your team's pending approvals here.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  header: {
    backgroundColor: '#0052cc',
    elevation: 0,
  },
  backButton: {
    paddingHorizontal: 8,
    marginRight: 8,
  },
  tabsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#0052cc',
  },
  tabWrapper: {
    marginRight: 24,
  },
  tabText: {
    color: '#ffffffaa',
    fontSize: 16,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ApprovalScreen;
