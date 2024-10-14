import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const DriverMap = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.454,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [driverLocation, setDriverLocation] = useState({
    latitude: 37.788,
    longitude: -122.4324,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      // Request permission to access location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get current location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setDriverLocation({ latitude, longitude });
      setRegion({ latitude, longitude, latitudeDelta: 0.005, longitudeDelta: 0.005 });
    };

    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        <Marker draggable coordinate={driverLocation} title="Driver Location" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default DriverMap;
