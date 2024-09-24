import { Stack, Tabs } from "expo-router";

export default function DiscoverLauyout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Conoce a tus Guias",
          headerShown:true
        }}
      />
    </Stack>
  );
}
