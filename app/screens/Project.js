import { View, Text, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Ionicons } from '@expo/vector-icons';

export default function ProjectsScreen() {
  const [search, setSearch] = useState('');

  const project = {
    name: 'Klenam',
    code: 'KLEN',
    logo: require('../assets/klenam.png'), // Replace with actual logo
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 16 }}>
        Projects
      </Text>

      <View
        style={{
          backgroundColor: '#f2f2f2',
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 10,
          marginBottom: 24,
        }}
      >
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={{ marginLeft: 8, color: '#000', flex: 1 }}
          placeholder="Search projects"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ color: '#444', fontSize: 14, marginBottom: 8 }}>Recently viewed</Text>
        <ProjectCard project={project} />

        <Text style={{ color: '#444', fontSize: 14, marginTop: 24, marginBottom: 8 }}>
          All projects
        </Text>
        <ProjectCard project={project} />
      </ScrollView>
    </View>
  );
}
