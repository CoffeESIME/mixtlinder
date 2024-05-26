import { Tabs } from "expo-router";

export default function LoginLauyout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
        }}
      />
    </Tabs>
  );
}
