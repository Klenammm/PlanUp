import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { CalendarList } from 'react-native-calendars';

const { height } = Dimensions.get('window');

const CalendarScreen = () => {
  const router = useRouter();

  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);

  // Bottom sheet animation and filter state
  const [activeFilter, setActiveFilter] = useState(null);
  const slideAnim = useState(new Animated.Value(height))[0];

  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedAssignee, setSelectedAssignee] = useState('Assignee');
  const [selectedType, setSelectedType] = useState('Type');

  // Dropdown options
  const statusOptions = ['To Do', 'In Progress', 'Done', 'Blocked'];
  const assigneeOptions = ['Klenam', 'Unassigned'];
  const typeOptions = ['Task', 'Sub Task'];

  const filterOptions = {
    status: statusOptions,
    assignee: assigneeOptions,
    type: typeOptions,
  };

  const selectedLabels = {
    status: selectedStatus,
    assignee: selectedAssignee,
    type: selectedType,
  };

  const openSheet = (filter) => {
    setActiveFilter(filter);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setActiveFilter(null));
  };

  const handleSelect = (filter, value) => {
    if (filter === 'status') setSelectedStatus(value);
    if (filter === 'assignee') setSelectedAssignee(value);
    if (filter === 'type') setSelectedType(value);
    closeSheet();
  };

  const tabs = [
    { label: 'Summary', route: '/screens/Summary' },
    { label: 'Board', route: '/screens/Board' },
    { label: 'All Work', route: '/screens/Work' },
    { label: 'Calendar', route: '/screens/Calendar' },
    { label: 'Approvals', route: '/screens/Approvals' },
    { label: 'Forms', route: '/screens/Forms' },
    { label: 'Settings', route: '/screens/Setting' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
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
              if (tab.route !== '/screens/Calendar') router.push(tab.route);
            }}
          >
            <Text style={[styles.tabText, tab.label === 'Calendar' && styles.activeTab]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {Object.keys(filterOptions).map((filter) => (
          <TouchableOpacity key={filter} style={styles.filterButton} onPress={() => openSheet(filter)}>
            <Text style={styles.filterText}>{selectedLabels[filter]} ▼</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Centered Calendar */}
      <View style={styles.calendarWrapper}>
        <CalendarList
          current={today}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#0052cc' },
          }}
          pastScrollRange={12}
          futureScrollRange={12}
          hideExtraDays={false}
          theme={{
            textMonthFontWeight: 'bold',
            todayTextColor: '#0052cc',
            selectedDayBackgroundColor: '#0052cc',
            selectedDayTextColor: '#fff',
            arrowColor: '#0052cc',
            monthTextColor: '#000',
          }}
          style={styles.calendarList}
        />
      </View>

      {/* Bottom Sheet Dropdown */}
      {activeFilter && (
        <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slideAnim }] }]}>
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
              <TouchableOpacity style={styles.sheetItem} onPress={() => handleSelect(activeFilter, item)}>
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
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#0052cc', elevation: 0 },
  backButton: { paddingHorizontal: 8, marginRight: 8 },
  tabsContainer: { paddingVertical: 10, paddingHorizontal: 8, backgroundColor: '#0052cc' },
  tabWrapper: { marginRight: 24 },
  tabText: { color: '#ffffffaa', fontSize: 16 },
  activeTab: { fontWeight: 'bold', color: '#fff', textDecorationLine: 'underline' },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterText: { fontSize: 14, color: '#000' },

  // Center Calendar
  calendarWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarList: {
    width: '90%',
    borderTopWidth: 1,
    borderColor: '#eee',
  },

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

export default CalendarScreen;


