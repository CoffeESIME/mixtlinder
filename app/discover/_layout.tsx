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
          title: "Discover",
          headerShown:true
        }}
      />
    </Stack>
  );
}
