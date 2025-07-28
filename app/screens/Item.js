import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Modal
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CreateTaskScreen() {
  const router = useRouter();
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [selectedProject, setSelectedProject] = useState('Klenam');
  const [selectedIssueType, setSelectedIssueType] = useState('Task');
  const [isProjectModalVisible, setProjectModalVisible] = useState(false);
  const [isIssueTypeModalVisible, setIssueTypeModalVisible] = useState(false);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setProjectModalVisible(false);
  };

  const handleIssueTypeSelect = (issueType) => {
    setSelectedIssueType(issueType);
    setIssueTypeModalVisible(false);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.headerText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create</Text>
          <TouchableOpacity>
            <Text style={[styles.headerText, styles.createButton]}>Create</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dropdownRow}>
          <TouchableOpacity style={styles.dropdown} onPress={() => setProjectModalVisible(true)}>
            <Text>{selectedProject} ▾</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdown} onPress={() => setIssueTypeModalVisible(true)}>
            <Text>☑ {selectedIssueType} ▾</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Add a summary..."
          value={summary}
          onChangeText={setSummary}
          style={styles.summaryInput}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <TextInput
            placeholder="Add a description..."
            value={description}
            onChangeText={setDescription}
            multiline
            style={styles.textArea}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attachments</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>➕ Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More fields</Text>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Assignee</Text>
            <Text style={styles.fieldValue}>Automatic</Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Reporter</Text>
            <Text style={styles.fieldValue}>🟢 Me</Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Priority</Text>
            <Text style={styles.fieldValue}>🟠 Medium</Text>
          </View>
        </View>
      </ScrollView>

      {/* Project Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isProjectModalVisible}
        onRequestClose={() => setProjectModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Project</Text>
              <TouchableOpacity onPress={() => setProjectModalVisible(false)}>
                <AntDesign name="close" size={20} color="#888" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#aaa"
            />

            <Text style={styles.selectedLabel}>SELECTED</Text>

            <TouchableOpacity
              style={styles.projectItem}
              onPress={() => handleProjectSelect('Klenam')}
            >
              <View style={styles.projectIcon} />
              <View style={styles.projectTextContainer}>
                <Text style={styles.projectName}>Klenam</Text>
                <Text style={styles.projectCode}>KLEN</Text>
              </View>
              <AntDesign name="check" size={18} color="#4CAF50" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Issue Type Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isIssueTypeModalVisible}
        onRequestClose={() => setIssueTypeModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Issue Type</Text>
              <TouchableOpacity onPress={() => setIssueTypeModalVisible(false)}>
                <AntDesign name="close" size={20} color="#888" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#aaa"
            />

            <Text style={styles.selectedLabel}>SELECTED</Text>

            <TouchableOpacity
              style={styles.projectItem}
              onPress={() => handleIssueTypeSelect('Task')}
            >
              <View style={styles.projectIcon} />
              <View style={styles.projectTextContainer}>
                <Text style={styles.projectName}>Task</Text>
                <Text style={styles.projectCode}>A small, distinct piece of work.</Text>
              </View>
              <AntDesign name="check" size={18} color="#4CAF50" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F4F9',
    flexGrow: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  headerText: {
    fontSize: 16,
    color: '#007AFF'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  createButton: {
    fontWeight: '600'
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  dropdown: {
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 6,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 4,
    alignItems: 'center'
  },
  summaryInput: {
    backgroundColor: '#fff',
    padding: 12,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 16
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 8
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 6,
    minHeight: 80,
    padding: 10,
    fontSize: 14
  },
  linkText: {
    color: '#007AFF'
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6
  },
  fieldLabel: {
    fontWeight: '500'
  },
  fieldValue: {
    color: '#444'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  selectedLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
  projectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  projectIcon: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#9370DB',
    marginRight: 12,
  },
  projectTextContainer: {
    flex: 1,
  },
  projectName: {
    fontSize: 16,
    fontWeight: '500',
  },
  projectCode: {
    fontSize: 12,
    color: '#888',
  },
});
