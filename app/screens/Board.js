import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BoardScreen = () => {
  const router = useRouter();

  const columns = [
    { title: 'TO DO', count: 0 },
    { title: 'IN PROGRESS', count: 0 },
    { title: 'DONE', count: 0 },
  ];

  // Tabs with routes for navigation
  const tabs = [
    { label: 'Summary', route: '/screens/Summary' },
    { label: 'Board', route: '/screens/Board' }, // Current screen
    { label: 'All Work', route: '/screens/Work' },
    { label: 'Calendar', route: '/screens/Calendar' },
    { label: 'Approvals', route: '/screens/Approvals' },
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
        <Ionicons name="ellipsis-horizontal" size={22} color="#fff" style={{ marginRight: 10 }} />
      </Appbar.Header>

      {/* Navigation Tabs with Router */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navTabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabWrapper}
            onPress={() => {
              if (tab.route !== '/board') router.push(tab.route); // Avoid reloading current screen
            }}
          >
            <Text style={[styles.navText, tab.label === 'Board' && styles.activeTab]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Board Columns (Horizontal Scroll) */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
         contentContainerStyle={[styles.boardContainer, { paddingTop: 0, paddingBottom: 20 }]}
      >
        {columns.map((col, index) => (
          <Card key={index} style={styles.boardCard}>
            <Card.Content style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.columnLabel}>{col.title}</Text>
              <Text style={styles.count}>{col.count}</Text>
              <Image 
                source={require('../../assets/chart.png')} 
                style={{ width: 60, height: 60, marginVertical: 10 }} 
                resizeMode="contain" 
              />
              <Text style={styles.noWorkText}>No work yet!</Text>
              <Text style={styles.subText}>Create a work item to start planning.</Text>

              <TouchableOpacity style={styles.createButton} onPress={() => router.push("/screens/Item")}>
                <Ionicons name="add" size={18} color="#000" />
                <Text style={styles.createText}>Create</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0052cc',
  },
  header: {
    backgroundColor: '#0052cc',
    elevation: 0,
  },
  backButton: {
    paddingHorizontal: 8,
    marginRight: 8,
  },
  navTabsContainer: {
    // paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#0052cc',
  },
  tabWrapper: {
    marginRight: 24,
  },
  navText: {
    color: '#ffffffaa',
    fontSize: 16,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
  },
  boardContainer: {
    paddingHorizontal: 16,
    
  },
  boardCard: {
    width: 280,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#f4f5f7',
    paddingVertical: 20,
    alignItems: 'center',
  },
  columnLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
  },
  count: {
    position: 'absolute',
    top: 10,
    right: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  noWorkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subText: {
    color: '#555',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  createText: {
    fontSize: 16,
    marginLeft: 4,
    color: '#000',
  },
});

export default BoardScreen;
