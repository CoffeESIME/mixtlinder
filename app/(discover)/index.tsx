import DiscoverCard from "@/components/discoverCard/DiscoverCard";
import { View } from "react-native";
export default function Discover() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View
        style={{
          width: "95%",
          height: "75%",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 1,
          shadowRadius: 10.32,
          elevation: 16,
        }}
      >
        <DiscoverCard
          imgUrl={"../../assets/images/sport_climbing.webp"}
        ></DiscoverCard>
      </View>
    </View>
  );
}
