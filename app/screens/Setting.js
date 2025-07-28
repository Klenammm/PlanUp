import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SettingsScreen = () => {
  const router = useRouter();

  // Tabs with navigation routes
  const tabs = [
    { label: 'Summary', route: '/screens/Summary' },
    { label: 'Board', route: '/screens/Board' },
    { label: 'All Work', route: '/screens/Work' },
    { label: 'Calendar', route: '/screens/Calendar' },
    { label: 'Approvals', route: '/screens/Approvals' },
    { label: 'Forms', route: '/screens/Forms' },
    { label: 'Settings', route: '/screens/Setting' }, // Current screen
  ];

  return (
    <View style={styles.container}>
      {/* Top Appbar */}
      <Appbar.Header style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Appbar.Content title="Klenam ▼" titleStyle={{ color: '#fff', fontWeight: 'bold' }} />
      </Appbar.Header>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabWrapper}
            onPress={() => {
              if (tab.route !== '/settings') router.push(tab.route);
            }}
          >
            <Text style={[styles.tabText, tab.label === 'Settings' && styles.activeTab]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <Image
            source={require('../../assets/avatar-icon.png')} // Replace with your avatar asset
            style={styles.avatar}
          />
          <Text style={styles.changeAvatarText}>Change avatar</Text>
        </View>

        {/* Editable Project Info */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>Project name</Text>
          <TextInput
            mode="outlined"
            placeholder="Klenam"
            style={styles.input}
            outlineColor="#eee"
            activeOutlineColor="#0052cc"
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Project key</Text>
          <TextInput
            mode="outlined"
            placeholder="KLEN"
            style={styles.input}
            outlineColor="#eee"
            activeOutlineColor="#0052cc"
          />
        </View>

        {/* Move to Trash */}
        <TouchableOpacity style={styles.trashButton}>
          <Text style={styles.trashText}>Move project to trash</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8fc' },
  header: { backgroundColor: '#0052cc', elevation: 0 },
  backButton: { paddingHorizontal: 8, marginRight: 8 },
  tabsContainer: { paddingVertical: 10, paddingHorizontal: 16, backgroundColor: '#0052cc' },
  tabWrapper: { marginRight: 24 },
  tabText: { color: '#ffffffaa', fontSize: 16 },
  activeTab: { fontWeight: 'bold', color: '#fff', textDecorationLine: 'underline' },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  avatarSection: { alignItems: 'center', marginBottom: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
  changeAvatarText: { color: '#555', fontSize: 14 },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  label: { fontSize: 14, color: '#888', marginBottom: 4 },
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
  },
  trashButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  trashText: { fontSize: 16, color: 'red', fontWeight: 'bold' },
});

export default SettingsScreen;
