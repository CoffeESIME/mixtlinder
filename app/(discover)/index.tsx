import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import Swiper from "react-native-deck-swiper";
[
  { id: 1, imgUrl: "../../assets/images/sport_climbing.webp" },
  { id: 2, imgUrl: "../../assets/images/diego1.jpg" },
];
const cards = [
  {
    text: "Card 1",
    backgroundColor: "#f2f2f2",
    image: require("../../assets/images/miry1.jpg"),
  },
  {
    text: "Card 1",
    backgroundColor: "#f2f2f2",
    image: require("../../assets/images/miry2.jpg"),
  },
  {
    text: "Card 2",
    backgroundColor: "#cccccc",
    image: require("../../assets/images/diego1.jpg"),
  },
  {
    text: "Card 2",
    backgroundColor: "#cccccc",
    image: require("../../assets/images/diego2.jpg"),
  },
  // Add more cards as needed
];

export default function App() {
  const [index, setIndex] = useState(0); // Track the index of the current card
  const swiperRef = useRef(null);

  const onSwiped = (cardIndex) => {
    console.log("Card at " + cardIndex + " was swiped.");
    setIndex(cardIndex + 1); // Update the card index
  };

  const renderCard = (card, index) => {
    return (
      <View style={[styles.card, { backgroundColor: card.backgroundColor }]}>
        <Image source={card.image} style={styles.cardImage} />
        <Text style={styles.text}>{card.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
       ref={swiperRef}
        cards={cards}
        renderCard={renderCard}
        onSwiped={onSwiped}
        onSwipedLeft={(cardIndex) =>
          console.log("Card at " + cardIndex + " was swiped left")
        }
        onSwipedRight={(cardIndex) =>
          console.log("Card at " + cardIndex + " was swiped right")
        }
        cardIndex={index}
        backgroundColor={"#4FD0E9"}
        stackSize={2} // Number of cards shown in background
      />
            <Button title="Dislike" onPress={() => swiperRef.current.swipeLeft()} />
      <Button title="Love" onPress={() => swiperRef.current.swipeRight()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f5",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 300,
    height: 300,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  cardImage: {
    width: 280,
    height: 280,
    borderRadius: 3,
  },
});
