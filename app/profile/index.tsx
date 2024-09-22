// Profile.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import CatClaw from "@/components/Claw/Claw"; // Asegúrate de que la ruta sea correcta

// Datos ficticios para el nivel del usuario
const userLevelClaws = [1, 2, 3, 4, 5];

// Datos ficticios para las rutas del usuario
const userRoutes = [
  {
    id: "1",
    level: 1,
    name: "Sendero El Bosque",
    distance: "5 km",
    estimatedTime: "2 horas",
  },
  {
    id: "2",
    level: 2,
    name: "Camino de la Montaña",
    distance: "10 km",
    estimatedTime: "4 horas",
  },
  {
    id: "3",
    level: 3,
    name: "Ruta del Río",
    distance: "7 km",
    estimatedTime: "3 horas",
  },
];

// Datos ficticios para las próximas rutas desbloqueadas
const nextRoutes = [
  {
    id: "4",
    level: 4,
    name: "Sendero del Valle",
    distance: "12 km",
    estimatedTime: "5 horas",
  },
  {
    id: "5",
    level: 5,
    name: "Camino del Pico",
    distance: "15 km",
    estimatedTime: "6 horas",
  },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Garras Principales del Usuario */}
      <CatClaw image="" />

      {/* Bienvenida */}
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <Text style={styles.levelText}>Tu Nivel Mixtli</Text>

      {/* Garras de Nivel del Usuario */}
      <Text style={styles.sectionTitle}>Tus Garras de Nivel</Text>
      <View style={styles.levelClawsContainer}>
        {userLevelClaws.map((claw) => (
          <CatClaw key={claw} image="" size="small" />
        ))}
      </View>

      {/* Tabla de Rutas del Usuario */}
      <Text style={styles.sectionTitle}>Tus Rutas</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Nivel</Text>
        <Text style={styles.tableHeaderText}>Nombre</Text>
        <Text style={styles.tableHeaderText}>Distancia</Text>
        <Text style={styles.tableHeaderText}>Tiempo</Text>
      </View>
      <FlatList
        data={userRoutes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.level}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.distance}</Text>
            <Text style={styles.tableCell}>{item.estimatedTime}</Text>
          </View>
        )}
      />

      {/* Próximas Rutas Desbloqueadas */}
      <Text style={styles.sectionTitle}>Próximas Rutas</Text>
      <FlatList
        data={nextRoutes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.nextRouteItem}>
            <CatClaw image="" size="small" />
            <View style={styles.nextRouteInfo}>
              <Text style={styles.routeName}>{item.name}</Text>
              <Text style={styles.routeDetails}>
                {item.distance} • {item.estimatedTime}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  levelText: {
    fontSize: 18,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  levelClawsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#DDD",
    paddingVertical: 10,
    borderRadius: 5,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  nextRouteItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  nextRouteInfo: {
    marginLeft: 10,
  },
  routeName: {
    fontSize: 16,
    fontWeight: "600",
  },
  routeDetails: {
    fontSize: 14,
    color: "#555",
  },
});
