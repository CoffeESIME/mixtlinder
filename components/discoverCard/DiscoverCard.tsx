import { Image, StyleSheet, ImageBackground, Text } from "react-native";
import { View } from "../Themed";
export default function DiscoverCard({ imgUrl }) {
  return (
    <ImageBackground source={imgUrl} style={styles.logo}>
      <View style={styles.cardInner}>
        <Text style={styles.name}>This is text</Text>
        <Text style={styles.bio}>Biogra</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: 'flex-end'
  },
  cardInner: {
    color: 'black',
    backgroundColor: 'transparent',
  
    padding: 10
  },
  bio: { fontSize: 18, color: "white" },
  name: { fontSize: 30, color: "white", fontWeight: "bold" },
});
