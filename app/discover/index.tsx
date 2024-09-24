import React, { useRef, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Swiper from "react-native-deck-swiper";

// Constants
const { width, height } = Dimensions.get("window");

const cards = [
  {
    id: 1,
    text: "La Miriam, la guia estrella",
    image: require("../../assets/images/miry1.jpg"),
  },
  {
    id: 2,
    text: "La Miriam, la guia estrella",
    image: require("../../assets/images/miry2.jpg"),
  },
  {
    id: 3,
    text: "Diego, Caballero",
    image: require("../../assets/images/diego1.jpg"),
  },
  {
    id: 4,
    text: "Diego Caballero",
    image: require("../../assets/images/diego2.jpg"),
  },
  // Add more cards as needed
];

// Card Component
const Card = React.memo(({ card }) => (
  <View style={styles.card}>
    <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
    <Text style={styles.cardText}>{card.text}</Text>
  </View>
));

// Buttons Component
const Buttons = ({ onDislike, onLove }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, styles.dislikeButton]}
      onPress={onDislike}
      accessibilityLabel="Dislike"
    >
      <Text style={styles.buttonText}>Dislike</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.button, styles.loveButton]}
      onPress={onLove}
      accessibilityLabel="Love"
    >
      <Text style={styles.buttonText}>Love</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const onSwiped = useCallback(
    (cardIndex) => {
      console.log(`Card at index ${cardIndex} was swiped.`);
      setCurrentIndex(cardIndex + 1);
    },
    [setCurrentIndex]
  );

  const onSwipedAll = useCallback(() => {
    Alert.alert("End", "You have swiped all the cards!");
    // Reset swiper or navigate as needed
    setCurrentIndex(0);
    swiperRef.current.jumpToCardIndex(0);
    swiperRef.current.resetCards();
  }, []);

  const renderCard = useCallback((card) => <Card key={card.id} card={card} />, []);

  const handleDislike = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const handleLove = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={cards}
        renderCard={renderCard}
        onSwiped={onSwiped}
        onSwipedAll={onSwipedAll}
        cardIndex={currentIndex}
        stackSize={3}
        verticalSwipe={false}
        backgroundColor="#f0f0f0"
        overlayLabels={{
          left: {
            title: "NOPE",
            style: styles.overlayLeft,
          },
          right: {
            title: "LIKE",
            style: styles.overlayRight,
          },
        }}
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
      />
      <Buttons onDislike={handleDislike} onLove={handleLove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: width * 0.9,
    height: height * 0.7,
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardText: {
    fontSize: 20,
    color: "#333",
    marginTop: 15,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    width: width * 0.8,
    justifyContent: "space-between",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  dislikeButton: {
    backgroundColor: "#ff4d4d",
  },
  loveButton: {
    backgroundColor: "#4dff88",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  overlayLeft: {
    label: {
      backgroundColor: "red",
      borderColor: "red",
      color: "white",
      fontSize: 24,
      padding: 10,
    },
    wrapper: {
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      marginTop: 20,
      marginLeft: -20,
    },
  },
  overlayRight: {
    label: {
      backgroundColor: "green",
      borderColor: "green",
      color: "white",
      fontSize: 24,
      padding: 10,
    },
    wrapper: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: 20,
      marginLeft: 20,
    },
  },
});
