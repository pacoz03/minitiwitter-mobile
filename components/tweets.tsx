// components/Tweet.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors as Colors } from '../constants/theme';
import { TweetType } from '../data/dummy';

export default function Tweet({ item }: { item: TweetType }) {
  // Funzione helper per formattare i numeri (es. 4500 -> 4.5K)
  const formatCount = (count: number) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + 'K' : count.toString();
  };

  return (
    <View style={styles.container}>
      {/* Header: Nome, Handle, Tempo */}
      <View style={styles.header}>
        <Text style={styles.displayName}>{item.displayName}</Text>
        <Text style={styles.handle}>{item.handle}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>

      {/* Contenuto del Tweet */}
      <Text style={styles.content}>{item.content}</Text>

      {/* Footer: Icone */}
      <View style={styles.footer}>
        <View style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={18} color={Colors.textSecondary} />
          <Text style={styles.actionText}>{item.comments}</Text>
        </View>
        
        <View style={styles.actionButton}>
          <Ionicons name="heart-outline" size={18} color={Colors.textSecondary} />
          <Text style={styles.actionText}>{formatCount(item.likes)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  displayName: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 6,
  },
  handle: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginRight: 'auto', // Spinge il tempo a destra o si ferma lì
  },
  time: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  content: {
    color: Colors.text,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    gap: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: Colors.textSecondary,
    fontSize: 13,
  },
});