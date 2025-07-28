import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NothingFoundScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.title}>Klenam</Text>
          <Text style={styles.status}>Due</Text>
        </View>

        {/* Spacer for symmetry */}
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Ionicons name="search-circle-outline" size={80} color="#ccc" />
        <Text style={styles.notFound}>Nothing found</Text>
        <Text style={styles.subtext}>Please select a different filter.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FB',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  headerCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#888',
  },
  status: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 2,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  notFound: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#000',
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});
