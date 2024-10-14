import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const initialRegion = {
        latitude: 37.78825,  // Example latitude
        longitude: -122.4324, // Example longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={initialRegion}
            >
                <Marker 
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }} 
                    title={"Marker Title"} 
                    description={"Marker Description"} 
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen;

