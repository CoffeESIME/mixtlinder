import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-deck-swiper";

const cards = [
  {
    text: "La Miriam, la guia estrella",
    image: require("../../assets/images/miry1.jpg"),
  },
  {
    text: "La Miriam, la guia estrella",
    image: require("../../assets/images/miry2.jpg"),
  },
  {
    text: "Diego, Caballero",
    image: require("../../assets/images/diego1.jpg"),
  },
  { text: "Diego Caballero", image: require("../../assets/images/diego2.jpg") },
  // Add more cards as needed
];

export default function App() {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const onSwiped = (cardIndex) => {
    console.log("Card at " + cardIndex + " was swiped.");
    setIndex(cardIndex + 1);
  };

  const renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Image source={card.image} style={styles.cardImage} />
        <Text style={styles.cardText}>{card.text}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={renderCard}
          onSwiped={onSwiped}
          cardIndex={index}
          stackSize={1}
          verticalSwipe={false}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "red",
                  color: "white",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "green",
                  color: "white",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => swiperRef.current.swipeLeft()}
          >
            <Text style={styles.buttonText}>Dislike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => swiperRef.current.swipeRight()}
          >
            <Text style={styles.buttonText}>Love</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  card: {
    width: "100%", // Ajusta el ancho de la carta
    height: "100%", // Ajusta la altura de la carta
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  cardImage: {
    width: "60%", // Asegura que la imagen se ajusta dentro de la carta
    height: "100%", // Asegura que la imagen se ajusta dentro de la carta
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: "black",
    marginTop: 10,
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute", // Esto coloca los botones sobre la carta
    top: 500, // Ajusta según sea necesario para posicionar los botones más abajo
    width: "100%", // Asegura que el contenedor de botones tenga el ancho completo de la pantalla
    height: "100%", // Asegura que el contenedor,
    backgroundColor: "#DDDDDD",
    elevation: 10,
  },
  button: {
    width: 60, // Tamaño de los botones
    height: 60, // Tamaño de los botones
    borderRadius: 30, // Botones redondos
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#585858",
  },
});
