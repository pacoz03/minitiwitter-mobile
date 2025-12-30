import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack 
     // Nascondi la barra di navigazione e disabilita i gesti di navigazione
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}