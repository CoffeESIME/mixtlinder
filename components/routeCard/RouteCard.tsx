// RouteCard.tsx
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Modal,
  FlatList,
} from "react-native";

export interface CardProps {
  image: ImageSourcePropType;
  cardText: string;
  title: string;
  participants: string[];
  guide: string;
  routeDetails: {
    distance: string;
    estimatedTime: string;
    description: string;
  };
  date: string;
  id: number;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const RouteCard = (card: CardProps) => {
  const [modalVisible, setModalVisible] = useState<{
    participants: boolean;
    guides: boolean;
    route: boolean;
  }>({
    participants: false,
    guides: false,
    route: false,
  });

  const openModal = (type: "participants" | "guides" | "route") => {
    setModalVisible({ participants: false, guides: false, route: false, [type]: true });
  };

  const closeModal = () => {
    setModalVisible({ participants: false, guides: false, route: false });
  };

  return (
    <View style={[styles.card, card.style]}>
      <Image source={card.image} style={styles.cardImage} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardText}>{card.cardText}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openModal("participants")}
        >
          <Text style={styles.buttonText}>Ver Lista de Participantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openModal("guides")}>
          <Text style={styles.buttonText}>Ver Guías</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openModal("route")}>
          <Text style={styles.buttonText}>Ver Ruta</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal para Lista de Participantes */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible.participants}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Lista de Participantes</Text>
            <FlatList
              data={card.participants}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Text style={styles.modalText}>• {item}</Text>}
            />
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para Guías */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible.guides}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Guías</Text>
            <Text style={styles.modalText}>{card.guide}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para Ruta */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible.route}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalles de la Ruta</Text>
            <Text style={styles.modalText}>Distancia: {card.routeDetails.distance}</Text>
            <Text style={styles.modalText}>
              Tiempo Estimado: {card.routeDetails.estimatedTime}
            </Text>
            <Text style={styles.modalDescription}>{card.routeDetails.description}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
   
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  scrollView: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  cardText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
    textAlign: "justify",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    color: "#333",
  },
  modalText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "stretch",
  },
  modalDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "left",
    alignSelf: "stretch",
  },
  closeButton: {
    backgroundColor: "#f44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});

export default RouteCard;
