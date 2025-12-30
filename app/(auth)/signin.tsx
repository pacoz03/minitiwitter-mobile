// app/login.tsx
import AuthInput from '@/components/AuthInput';
import { colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const hasError = true; // Mock per visualizzare l'errore rosso

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subtitle}>Enter your account credentials</Text>

      <AuthInput 
        icon="at" // @ icon
        placeholder="Username or email address" 
        value={username} 
        onChangeText={setUsername} 
      />

      <AuthInput 
        icon="lock-closed-outline" 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry
      />

      {hasError && (
        <View style={styles.errorContainer}>
          <Ionicons name="warning" size={20} color="white" />
          <Text style={styles.errorText}>Incorrect username or password.</Text>
        </View>
      )}

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={() => router.replace('/(tabs)/home')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Or sign in with a token</Text>

      <TouchableOpacity style={styles.tokenButton}>
        <Text style={styles.tokenButtonText}>Continue with token</Text>
      </TouchableOpacity>

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
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 30,
  },
  errorContainer: {
    backgroundColor: '#d00e17',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    gap: 10,
  },
  errorText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#1c2128',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '45%',
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
    width: '45%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  orText: {
    color: colors.textSecondary,
    marginBottom: 15,
  },
  tokenButton: {
    backgroundColor: '#1c2128',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  tokenButtonText: {
    color: colors.primary, // O text se preferisci bianco
    fontWeight: '600',
  }
});