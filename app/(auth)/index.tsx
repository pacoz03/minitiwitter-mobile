import { colors } from '@/constants/theme';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/button';

// per le icone usiamo Ionicons che trovate a questo link: https://ionic.io/ionicons
import Ionicons from '@expo/vector-icons/Ionicons';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="logo-twitter" size={100} color={colors.primary} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Twitter</Text>
        <Text style={styles.subtitle}>What&apos;s up?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button variant="primary"
          onPress={() => router.push('/(auth)/signup')}>
          Create Account</Button>
        <Button variant="secondary"
          onPress={() => router.push('/(auth)/signin')}>
          Sign In</Button>
      </View>
    </View>
  );
}

// Definiamo gli stili nel file StyleSheet per una migliore leggibilità e manutenzione
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 20,
  },
  iconContainer: {
    top: 250,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    textAlign: 'center',
  },
  boldText: {
    color: 'white',
    fontWeight: '900',
  },
  buttonsContainer: {
    marginBottom: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});