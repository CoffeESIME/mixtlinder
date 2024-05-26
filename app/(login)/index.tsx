import { Link } from "expo-router";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Our App!</Text>
      <Link href="/discover" asChild>
        <Button
          title="Go to Discover"
          onPress={() => console.log("Go to Discover")}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
