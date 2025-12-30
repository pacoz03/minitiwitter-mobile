// app/signup-username.tsx
import AuthInput from '@/components/AuthInput';
import { colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignupUsernameScreen() {
  const [username, setUsername] = useState('');
  
  // Impostalo a true per vedere il banner rosso come nello screenshot
  const isUsernameTaken = true; 

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <Text style={styles.stepText}>Final step</Text>
      <Text style={styles.title}>Choose your username</Text>

      {/* Input */}
      <View style={{ marginTop: 20 }}>
        <AuthInput 
            icon="at" 
            placeholder="Insert username" 
            value={username} 
            onChangeText={setUsername} 
        />
      </View>

      {/* Error Banner */}
      {isUsernameTaken && (
        <View style={styles.errorContainer}>
          <Ionicons name="warning" size={20} color="white" />
          <Text style={styles.errorText}>Username is not available.</Text>
        </View>
      )}

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Questo tasto completerà la registrazione e porterà alla Home */}
        <TouchableOpacity style={styles.nextButton} onPress={() => router.replace('/(tabs)/home')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: colors.background,
  },
  stepText: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorContainer: {
    backgroundColor: '#d00e17', // Rosso errore
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    gap: 10,
  },
  errorText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40, // Spazio fisso dopo l'errore/input
  },
  backButton: {
    backgroundColor: '#1c2128',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  backButtonText: {
    color: colors.text,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});