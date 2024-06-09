import { ScrollView, View, Text, TouchableOpacity, Image, ImageSourcePropType, StyleSheet, StyleProp, ViewStyle } from "react-native";
export interface cardProps {
    image: ImageSourcePropType;
    cardText: string;
    title: string;
    participants: string[];
    guide: string;
    date: string;
    id: number;
    className?: string;
    style ?: StyleProp<ViewStyle>;
}
export default function RouteCard (card : cardProps)  {
    return (
      <View style={styles.card}>
        <Image source={card.image} style={styles.cardImage} />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.cardText}>{card.cardText}</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Ver Lista de Participantes')}>
            <Text style={styles.buttonText}>Ver Lista de Participantes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Ver Guías')}>
            <Text style={styles.buttonText}>Ver Guías</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Ver Ruta')}>
            <Text style={styles.buttonText}>Ver Ruta</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    card: {
      width: 300,
      height: 500,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
      backgroundColor: "#fff",
    },
    cardImage: {
      width: "100%",
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    scrollView: {
      width: "100%",
    },
    cardText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
      padding: 10,
    },
    button: {
      backgroundColor: "#f1f1f1",
      padding: 10,
      borderRadius: 5,
      margin: 10,
      alignItems: "center",
    },
    buttonText: {
      fontSize: 16,
      color: "#333",
    },
  });
  