import { Stack, Tabs } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Perfil",
          headerShown:true
        }}
      />
    </Stack>
  );
}
