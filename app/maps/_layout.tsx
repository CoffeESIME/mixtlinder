import { Stack, Tabs } from "expo-router";

export default function MapasLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Mapas",
          headerShown: true
        }}
      />
    </Stack>
  );
}
