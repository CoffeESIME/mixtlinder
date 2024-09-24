// components/NewRoutes.js
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RouteCard from "@/components/routeCard/RouteCard";
import Swiper from "react-native-deck-swiper";
import { CardProps } from "@/components/routeCard/RouteCard";

const trips: CardProps[] = [
  {
    id: 1,
    title: "Exploración del Cañón del Sumidero",
    cardText: "Únete a nosotros para una aventura inolvidable en el Cañón del Sumidero, uno de los paisajes naturales más impresionantes.",
    image: require("../../assets/images/puerta.jpg"),
    participants: ["Ana", "Carlos", "Fernanda"],
    guide: "Diego Caballero",
    date: "2023-07-15",
    routeDetails: {
      distance: "8 km",
      estimatedTime: "3 horas",
      description: "Recorre el impresionante Cañón del Sumidero a pie o en bote, observando la fauna y flora local.",
    },
  },
  {
    id: 2,
    title: "Aventura en las Montañas Rocosas",
    cardText: "Explora las Montañas Rocosas con un tour que te llevará a través de senderos emocionantes y vistas panorámicas.",
    image: require("../../assets/images/pelado.jpg"),
    participants: ["Sofía", "Juan", "Luis"],
    guide: "La Miriam",
    date: "2023-08-05",
    routeDetails: {
      distance: "12 km",
      estimatedTime: "5 horas",
      description: "Un recorrido por senderos de alta montaña con vistas espectaculares y desafíos emocionantes.",
    },
  },
  {
    id: 3,
    title: "Descubrimiento de Cenotes en Yucatán",
    cardText: "Descubre los misteriosos cenotes de Yucatán en un viaje que combina buceo, historia y cultura.",
    image: require("../../assets/images/puerta.jpg"),
    participants: ["Elena", "Roberto"],
    guide: "José Perez",
    date: "2023-09-10",
    routeDetails: {
      distance: "5 km",
      estimatedTime: "2 horas",
      description: "Explora cenotes ocultos en la selva de Yucatán, con actividades de buceo y natación.",
    },
  },
  {
    id: 4,
    title: "Camino Inca hacia Machu Picchu",
    cardText: "Camina el antiguo Camino Inca, explorando ruinas históricas y paisajes espectaculares en el camino a Machu Picchu.",
    image: require("../../assets/images/pelado.jpg"),
    participants: ["María", "Miguel", "Andrea"],
    guide: "Julia Espinoza",
    date: "2023-10-21",
    routeDetails: {
      distance: "42 km",
      estimatedTime: "4 días",
      description: "Una experiencia única a través de la antigua ruta Inca, culminando en la majestuosa ciudadela de Machu Picchu.",
    },
  },
];

export default function NewRoutes() {
  const swiperRef = useRef<any>(null);
  const [index, setIndex] = useState(0);

  const renderCard = (card: CardProps) => {
    return (
      <RouteCard
        image={card.image}
        cardText={card.cardText}
        title={card.title}
        participants={card.participants}
        guide={card.guide}
        date={card.date}
        routeDetails={card.routeDetails}
        id={card.id}
      />
    );
  };

  const onSwiped = () => {
    setIndex((prevIndex) => (prevIndex + 1) % trips.length);
  };
  const handleNext = () => {
    const nextIndex = (index + 1) % trips.length;
    setIndex(nextIndex);
    swiperRef.current?.swipeLeft(); // Opcional: Puedes usar swipeLeft o jumpToCardIndex
  };

  
  const handlePrev = () => {
    const prevIndex = (index - 1 + trips.length) % trips.length;
    setIndex(prevIndex);
    swiperRef.current?.jumpToCardIndex(prevIndex);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={trips}
        renderCard={renderCard}
        onSwiped={onSwiped}
        cardIndex={index}
        stackSize={3}
        verticalSwipe={false}
        backgroundColor={"#f0f0f0"}
        infinite
        showSecondCard={true}
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrev}>
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginHorizontal: "auto",
    marginVertical: 30,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
