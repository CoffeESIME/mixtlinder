import { Stack, Tabs } from "expo-router";

export default function DiscoverLauyout() {
  return (
    <Stack
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Rutas",
          headerShown:false
        }}
      />
    </Stack>
  );
}
