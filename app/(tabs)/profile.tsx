// app/(tabs)/profile.tsx
import Tweet from '@/components/tweets';
import { colors as Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MOCK_TWEETS } from '../../data/dummy';

export default function ProfileScreen() {
  const ProfileHeader = () => (
    <View style={styles.headerContainer}>
      
      {/* Tasto Edit Profile in alto a destra */}
      <View style={styles.topRow}>
        <View style={{ flex: 1 }} /> {/* Spaziatore per spingere a destra */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
          <Ionicons name="arrow-forward" size={16} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* Info Utente */}
      <View style={styles.userInfo}>
        <Text style={styles.name}>Daniele</Text>
        <Text style={styles.handle}>@drainiel.jetop.social</Text>
      </View>

      {/* Titolo Sezione Posts */}
      <Text style={styles.sectionTitle}>Posts</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <FlatList
        data={MOCK_TWEETS} // Usiamo gli stessi dati mock per ora
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tweet item={item} />}
        ListHeaderComponent={ProfileHeader} // Inseriamo l'header qui
        contentContainerStyle={{ paddingBottom: 100 }} // Spazio per la TabBar
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 50, // Per gestire la safe area in alto
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  editButtonText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  userInfo: {
    marginBottom: 30,
  },
  name: {
    color: Colors.text,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  handle: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  sectionTitle: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
});