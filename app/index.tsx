// components/LandingPage.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import backgroundImage from "../assets/images/mixtlinder.webp";
import Button from "@/components/ui/buttons/Button";

const buttonData = [
  { text: "Conecta", href: "/discover" },
  { text: "Encuentra tu próxima ruta", href: "/nextroutes" },
  { text: "Ver Perfil", href: "/profile" },
  { text: "Ver Mapas", href: "/maps" },
  { text: "Conoce tus guías", href: "/about" },
];

export default function LandingPage() {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>¡Bienvenido a Mixtli!</Text>
        {buttonData.map((button, index) => (
          <Link key={index} href={button.href} asChild>
            <Button
              text={button.text}
              color="#ff6347" // Cambia el color del botón si es necesario
              accessibilityLabel={`Botón para ${button.text}`}
            />
          </Link>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  container: {
  
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 15,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
    marginVertical: "auto",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
});
