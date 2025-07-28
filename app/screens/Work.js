import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

const AllWorkScreen = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  // Modal and animation states
  const [activeFilter, setActiveFilter] = useState(null);
  const slideAnim = useState(new Animated.Value(height))[0];

  // Selected filter values
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedAssignee, setSelectedAssignee] = useState('Assignee');
  const [selectedType, setSelectedType] = useState('Type');
  const [selectedSort, setSelectedSort] = useState('Sort');

  // Tabs with routes for navigation
  const tabs = [
   
    { label: 'Summary', route: '/screens/Summary'},
    { label: 'Board', route: '/screens/Board' },
    { label: 'All Work', route: '/screens/Work' }, // Current screen
    { label: 'Calendar', route: '/screens/Calendar' },
    { label: 'Approvals', route: '/screens/Approvals' },
    { label: 'Forms', route: '/screens/Forms' },
    { label: 'Settings', route: '/screens/Setting' },
  ];

  // Dropdown options
  const statusOptions = ['To Do', 'In Progress', 'Done', 'Blocked'];
  const assigneeOptions = ['Klenam', 'Unassigned'];
  const typeOptions = ['Task', 'Sub Task'];
  const sortOptions = ['Created', 'Updated', 'Last Viewed', 'Issue Key'];

  const filterOptions = {
    status: statusOptions,
    assignee: assigneeOptions,
    type: typeOptions,
    sort: sortOptions,
  };

  const selectedLabels = {
    status: selectedStatus,
    assignee: selectedAssignee,
    type: selectedType,
    sort: selectedSort,
  };

  // Open the bottom sheet
  const openSheet = (filter) => {
    setActiveFilter(filter);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  // Close the bottom sheet
  const closeSheet = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setActiveFilter(null));
  };

  // Handle selection from dropdown
  const handleSelect = (filter, value) => {
    if (filter === 'status') setSelectedStatus(value);
    if (filter === 'assignee') setSelectedAssignee(value);
    if (filter === 'type') setSelectedType(value);
    if (filter === 'sort') setSelectedSort(value);
    closeSheet();
  };

  return (
    <View style={styles.container}>
      {/* Top Appbar */}
      <Appbar.Header style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Appbar.Content title="Klenam" titleStyle={{ color: '#fff', fontWeight: 'bold' }} />
        <TouchableOpacity>
          <Ionicons name="add" size={24} color="#fff" style={{ marginRight: 10 }} />
        </TouchableOpacity>
      </Appbar.Header>

      {/* Scrollable Tabs with Navigation */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabWrapper}
            onPress={() => {
              if (tab.route !== '/allwork') router.push(tab.route); // Avoid reloading current screen
            }}
          >
            <Text style={[styles.tabText, tab.label === 'All Work' && styles.activeTab]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Search work items"
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filter Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersRow}>
        {Object.keys(filterOptions).map((filter) => (
          <TouchableOpacity
            key={filter}
            style={styles.filterButton}
            onPress={() => openSheet(filter)}
          >
            <Text style={styles.filterText}>{selectedLabels[filter]} ▼</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Empty State */}
      <View style={styles.emptyState}>
        <Image
          source={require('../../assets/search-icon.png')}
          style={{ width: 60, height: 60, marginBottom: 16 }}
          resizeMode="contain"
        />
        <Text style={styles.emptyTitle}>Nothing found</Text>
        <Text style={styles.emptySubtitle}>Please select a different filter.</Text>
      </View>

      {/* Bottom Sheet Dropdown */}
      {activeFilter && (
        <Animated.View
          style={[
            styles.bottomSheet,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Select {activeFilter}</Text>
            <TouchableOpacity onPress={closeSheet}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={filterOptions[activeFilter]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.sheetItem}
                onPress={() => handleSelect(activeFilter, item)}
              >
                <Text style={styles.sheetItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f5f7' },
  header: { backgroundColor: '#0052cc', elevation: 0 },
  backButton: { paddingHorizontal: 8, marginRight: 8 },
  tabsContainer: { paddingVertical: 10, paddingHorizontal: 16, backgroundColor: '#0052cc' },
  tabWrapper: { marginRight: 24 },
  tabText: { color: '#ffffffaa', fontSize: 16 },
  activeTab: { fontWeight: 'bold', color: '#fff', textDecorationLine: 'underline' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4e6eb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 16,
  },
  searchInput: { flex: 1, marginLeft: 8, color: '#000', fontSize: 16 },
  filtersRow: { paddingHorizontal: 16, marginBottom: 10, flexDirection: 'row' },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterText: { fontSize: 14, color: '#000' },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  emptySubtitle: { fontSize: 14, color: '#555', marginTop: 4 },

  // Bottom Sheet
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '50%',
    paddingBottom: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sheetTitle: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  sheetItem: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
  sheetItemText: { fontSize: 16, color: '#000' },
});

export default AllWorkScreen;