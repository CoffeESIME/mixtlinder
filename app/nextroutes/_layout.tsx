import { Stack, Tabs } from "expo-router";

export default function DiscoverLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Rutas",
          headerShown:true
        }}
      />
    </Stack>
  );
}
