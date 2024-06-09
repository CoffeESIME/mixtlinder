import RouteCard from "@/components/routeCard/RouteCard";
import { View, Text } from "react-native";
import { cardProps } from "@/components/routeCard/RouteCard";
import Swiper from "react-native-deck-swiper";
import { useRef, useState } from "react";
const trips = [
    {
      id: 1,
      title: "Exploración del Cañón del Sumidero",
      cardText: "Únete a nosotros para una aventura inolvidable en el Cañón del Sumidero, uno de los paisajes naturales más impresionantes.",
      image: require("../../assets/images/puerta.jpg"),
      participants: ["Ana", "Carlos", "Fernanda"],
      guide: "Diego Caballero",
      date: "2023-07-15"
    },
    {
      id: 2,
      title: "Aventura en las Montañas Rocosas",
      cardText: "Explora las Montañas Rocosas con un tour que te llevará a través de senderos emocionantes y vistas panorámicas.",
      image: require("../../assets/images/pelado.jpg"),
      participants: ["Sofía", "Juan", "Luis"],
      guide: "La Miriam",
      date: "2023-08-05"
    },
    {
      id: 3,
      title: "Descubrimiento de Cenotes en Yucatán",
      cardText: "Descubre los misteriosos cenotes de Yucatán en un viaje que combina buceo, historia y cultura.",
      image: require("../../assets/images/puerta.jpg"),
      participants: ["Elena", "Roberto"],
      guide: "José Perez",
      date: "2023-09-10"
    },
    {
      id: 4,
      title: "Camino Inca hacia Machu Picchu",
      cardText: "Camina el antiguo Camino Inca, explorando ruinas históricas y paisajes espectaculares en el camino a Machu Picchu.",
      image: require("../../assets/images/pelado.jpg"),
      participants: ["María", "Miguel", "Andrea"],
      guide: "Julia Espinoza",
      date: "2023-10-21"
    }
  ];
  
export default function newRoutes(){
    const swiperRef = useRef(null);
    const [index, setIndex] = useState(0);
    const renderCard = (card: cardProps) => {
        return <RouteCard card={card} />;
      };
      const onSwiped = () => {
        console.log("Card at " + " was swiped.");
       setIndex(index + 1);
      };
      return (
        <View style={{ flex: 1 }}>
          <Swiper
            ref={swiperRef}
            cards={trips}
            renderCard={renderCard}
            onSwiped={onSwiped}
            cardIndex={index}
            stackSize={3}
            verticalSwipe={false}
            backgroundColor={"#f0f0f0"}
          />
        </View>
      );
      
}