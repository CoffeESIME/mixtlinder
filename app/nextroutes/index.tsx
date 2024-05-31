import MapView, { Polyline } from "react-native-maps";

const rutaGPS = [
  { latitude: 37.8025259, longitude: -122.4351431 },
  { latitude: 37.7896386, longitude: -122.421646 },
  // más puntos de la ruta...
];

export default function MapaConRuta() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polyline
        coordinates={rutaGPS}
        strokeColor="#000" // color de la línea
        strokeWidth={6} // grosor de la línea
      />
    </MapView>
  );
}
