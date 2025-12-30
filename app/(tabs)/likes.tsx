// app/(tabs)/likes.tsx
import { colors } from '@/constants/theme';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Tweet from '../../components/tweets';
import { MOCK_TWEETS } from '../../data/dummy';


export default function LikesScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Titolo Pagina */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <FlatList
        data={MOCK_TWEETS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tweet item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }} // Spazio per la TabBar fluttuante
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50, // Per evitare la notch area
  },
  headerContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  }
});