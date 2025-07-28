import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProjectsScreen() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const project = {
    name: 'Klenam',
    code: 'KLEN',
    logo: require('../../assets/project.png'),
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 48 }}>
      
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', top: 48, left: 16, zIndex: 10 }}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 16 }}>
        Projects
      </Text>

      {/* Search Bar */}
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
        {/* Pass navigation props */}
        <ProjectCard project={project} onPress={() => router.push('/screens/Summary')} />

        <Text style={{ color: '#444', fontSize: 14, marginTop: 24, marginBottom: 8 }}>
          All projects
        </Text>
        <ProjectCard project={project} onPress={() => router.push('/screens/Summary')} />
      </ScrollView>
    </View>
  );
}

// Updated ProjectCard with Navigation
function ProjectCard({ project, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image source={project.logo} style={{ width: 40, height: 40, borderRadius: 8, marginRight: 16 }} />
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>{project.name}</Text>
        <Text style={{ fontSize: 12, color: '#555' }}>{project.code}</Text>
      </View>
    </TouchableOpacity>
  );
}
