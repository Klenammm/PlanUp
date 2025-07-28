import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Dashboard = () => {
  const router = useRouter(); 

  const tabs = [
    { name: 'Summary', route: null },  // Current page
    { name: 'Board', route: '/screens/Board' },
    { name: 'All Work', route: '/screens/Work' },
    { name: 'Calendar', route: '/screens/Calendar' },
    { name: 'Approvals', route: '/screens/Approvals' },
    { name: 'Forms', route: '/screens/Forms' },
    { name: 'Settings', route: '/screens/Setting' },
  ];

  // Navigation handler for cards and status rows
  const handleNavigate = (route) => {
    if (route) router.push(route);
  };

  return (
    <View style={styles.container}>
      {/* Top Appbar */}
      <Appbar.Header style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Appbar.Content title="Klenam" titleStyle={{ color: '#fff', fontWeight: 'bold' }} />
      </Appbar.Header>

      {/* Navigation Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navTabsContainer}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (tab.route) router.push(tab.route);
            }}
            style={styles.tabWrapper}
          >
            <Text style={[styles.navText, tab.name === 'Summary' && styles.activeTab]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Quick Stats Cards */}
        <View style={styles.cardsRow}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNavigate('/screens/DoneTask')}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardNumber}>0 done</Text>
                <Text style={styles.cardDesc}>in the last 7 days</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNavigate('/screens/Updated')}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardNumber}>0 updated</Text>
                <Text style={styles.cardDesc}>in the last 7 days</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsRow}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNavigate('/screens/Created')}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardNumber}>0 created</Text>
                <Text style={styles.cardDesc}>in the last 7 days</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNavigate('/screens/Due')}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardNumber}>0 due</Text>
                <Text style={styles.cardDesc}>in the next 7 days</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>

        {/* Status Overview */}
        <TouchableOpacity>
          <Card style={styles.statusCard}>
            <Card.Content>
              <Text style={styles.statusTitle}>Status overview</Text>
              <Text style={styles.statusSubtitle}>in the last 14 days</Text>
              <Text style={styles.statusCount}>0</Text>
              <Text style={styles.statusDesc}>Work items</Text>

              {/* Status Rows - Now Clickable */}
              <TouchableOpacity
                style={styles.statusRow}
                onPress={() => handleNavigate('/screens/ToDo')}
              >
                <Text style={styles.statusLabel}>To Do</Text>
                <Text style={styles.statusValue}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.statusRow}
                onPress={() => handleNavigate('/screens/InProgress')}
              >
                <Text style={styles.statusLabel}>In Progress</Text>
                <Text style={styles.statusValue}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.statusRow}
                onPress={() => handleNavigate('/screens/Done')}
              >
                <Text style={styles.statusLabel}>Done</Text>
                <Text style={styles.statusValue}>0</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </TouchableOpacity>
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
    paddingVertical: 10,
    paddingHorizontal: 16,
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
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#f8f8f8',
  },
  cardNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  cardDesc: {
    color: '#555',
    marginTop: 4,
  },
  statusCard: {
    marginTop: 20,
    borderRadius: 12,
    elevation: 2,
    padding: 10,
  },
  statusTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  statusSubtitle: {
    color: '#777',
    marginBottom: 10,
  },
  statusCount: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  statusDesc: {
    textAlign: 'center',
    color: '#444',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
  },
  statusLabel: {
    fontSize: 16,
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;

