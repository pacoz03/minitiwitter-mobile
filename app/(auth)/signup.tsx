// app/signup.tsx
import AuthInput from '@/components/AuthInput';
import { colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('25/2/2005'); // Mock data per ora

  // Simuliamo un errore per vedere l'UI come nello screenshot
  const hasError = true; 

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: colors.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header Steps */}
      <Text style={styles.stepText}>Step 1 of 2</Text>
      <Text style={styles.title}>Your account</Text>

      {/* Error Banner */}
      {hasError && (
        <View style={styles.errorContainer}>
          <Ionicons name="warning" size={20} color="white" />
          <Text style={styles.errorText}>Please enter all required fields.</Text>
        </View>
      )}

      {/* Form */}
      <Text style={styles.label}>Email</Text>
      <AuthInput 
        icon="mail-outline" 
        placeholder="Enter your email address" 
        value={email} 
        onChangeText={setEmail} 
      />

      <Text style={styles.label}>Password</Text>
      <AuthInput 
        icon="lock-closed-outline" 
        placeholder="Choose your password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry
      />

      <Text style={styles.label}>Your birth date</Text>
      <AuthInput 
        icon="calendar-outline" 
        placeholder="dd/mm/yyyy" 
        value={date} 
        onChangeText={setDate} 
      />

      {/* Terms */}
      <Text style={styles.termsText}>
        By creating an account you agree to the <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      {/* Buttons Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/(auth)/signup_username')}> 
          {/* Nota: router.push('/(tabs)') è temporaneo per farti entrare nell'app */}
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginBottom: 20,
  },
  errorContainer: {
    backgroundColor: '#d00e17', // Rosso acceso
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    gap: 10,
  },
  errorText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 14,
  },
  termsText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  link: {
    color: colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Spinge i bottoni in fondo se c'è spazio
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