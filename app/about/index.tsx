// components/KnowingYouGuides.js
import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal, StyleSheet, Button, ListRenderItem } from 'react-native';
import GuideProfile from '@/components/Guide/Guide';
const Guias: Guia[] = [
  {
    name: "John Doe",
    image: "https://i.imgur.com/BoN9kdC.png",
    about: "Guía de montaña experimentado con más de 10 años de experiencia en los Alpes.",
    contact: {
      email: "john.doe@example.com",
      phone: "+1 234 567 8900"
    },
    reviews: [
      { id: 1, author: "Alice", text: "¡Gran experiencia! John tiene mucho conocimiento.", rating: 5 },
      { id: 2, author: "Bob", text: "Viaje seguro y divertido. ¡Muy recomendable!", rating: 4 }
    ]
  },
  {
    name: "María García",
    image: "https://i.imgur.com/mL6i69Q.png",
    about: "Guía especializada en rutas de senderismo en la Sierra Nevada. Apasionada de la naturaleza y la fotografía.",
    contact: {
      email: "maria.garcia@example.com",
      phone: "+34 678 910 111"
    },
    reviews: [
      { id: 1, author: "Carlos", text: "María hizo la caminata muy amena y compartió datos interesantes sobre la fauna local.", rating: 5 },
      { id: 2, author: "Luisa", text: "Una experiencia inolvidable, volvería a contratarla sin duda.", rating: 5 }
    ]
  },
  {
    name: "Pedro Fernández",
    image: "https://i.imgur.com/ZcLLrkY.png",
    about: "Guía certificado en escalada y montañismo. Conoce los mejores senderos de América del Sur.",
    contact: {
      email: "pedro.fernandez@example.com",
      phone: "+54 11 2233 4455"
    },
    reviews: [
      { id: 1, author: "Javier", text: "Pedro es muy profesional y atento a cada detalle. Excelente experiencia.", rating: 5 },
      { id: 2, author: "Sofía", text: "Muy paciente y motivador, ideal para principiantes.", rating: 4 }
    ]
  }
];

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Guia {
  name: string;
  image: string;
  about: string;
  contact: Contact;
  reviews: Review[];
}

const KnowingYouGuides: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedGuide, setSelectedGuide] = useState<Guia | null>(null);

  const openModal = (guia: Guia) => {
    setSelectedGuide(guia);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedGuide(null);
    setModalVisible(false);
  };

  const renderGuide: ListRenderItem<Guia> = ({ item }) => (
    <TouchableOpacity style={styles.guideItem} onPress={() => openModal(item)}>
      <Image source={{ uri: item.image }} style={styles.guideImage} />
      <Text style={styles.guideName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Guias}
        renderItem={renderGuide}
        keyExtractor={(item) => item.name} // Asumiendo que el nombre es único
        contentContainerStyle={styles.list}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Button title="Cerrar" onPress={closeModal} />
          {selectedGuide && <GuideProfile guide={selectedGuide} />}
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    alignItems: 'center',
  },
  guideItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  guideImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  guideName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
});

export default KnowingYouGuides;
