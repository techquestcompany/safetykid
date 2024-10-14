import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons,Foundation } from '@expo/vector-icons'; 

import MapScreen from './Mapview'; 
import DriversScreen from './DriverScreen'; 
import HomeScreen from './HomeScreen'; 
import EmergencyContactScreen from "./EmergencyContactScreen";

const Drawer = createDrawerNavigator();

export default function HomeScreenContainer() {
    return (
        
            <Drawer.Navigator initialRouteName="HomeScreen">
                <Drawer.Screen 
                    name="HomeScreen" 
                    component={HomeScreen} 
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home" size={24} color={color} />
                        ),
                    }} 
                />
                <Drawer.Screen 
                    name="Drivers" 
                    component={DriversScreen} 
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="car" size={24} color={color} />
                        ),
                    }} 
                />
                <Drawer.Screen 
                    name="MapView" 
                    component={MapScreen} 
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="map" size={24} color={color} />
                        ),
                    }} 
                />
                  <Drawer.Screen 
                    name="Emergency Contact" 
                    component={EmergencyContactScreen} 
                    options={{
                        drawerIcon: ({ color }) => (
                            <Foundation name="telephone" size={24} color={color} />
                        ),
                    }} 
                />
            </Drawer.Navigator>
        
    );
}
