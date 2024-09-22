import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";
import FindYourTrailButton from "@/components/ui/buttons/FindYourTrail";
import ConnectButton from "@/components/ui/buttons/Connect";
import backgroundImage from "@/assets/images/mixtlinder.webp";
import Button from "@/components/ui/buttons/Button";

// Reemplaza esto con la URL de tu imagen

export default function LandingPage() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido Mixtli!</Text>
        <Link href="/discover" asChild>
          <Button
            text="Conecta"
            color="#ff6347" // Cambia el color del botón
            onPress={() => {}} // Acción al presionar el botón
          />
        </Link>
        <Link href="/nextroutes" asChild>
          <Button
            text="Encuentra tu proxima ruta"
            color="#ff6347" // Cambia el color del botón
            onPress={() => {}} // Acción al presionar el botón
          />
        </Link>
        <Link href="/profile" asChild>
          <Button
            text="Ver Perfil"
            color="#ff6347" // Cambia el color del botón
            onPress={() => {}} // Acción al presionar el botón
          />
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%", // Asegura que el fondo ocupe todo el ancho
    height: "100%", // Asegura que el fondo ocupe toda la altura
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Opcional para mejorar la visibilidad de los textos y botones
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center", // Asegura que el texto esté centrado
    zIndex: 10,
  },
});
