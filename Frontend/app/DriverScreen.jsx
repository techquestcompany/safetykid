import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, Text } from 'react-native';
import { Link } from 'expo-router';

const DriverScreen = () => {
    const [studentName, setStudentName] = useState('');

    return (
        <View style={styles.container}>
           <View>
             <Text style={{fontWeight:"700"}} >Registered Drivers</Text>
           </View>

          <Text>No registered Drivers at the moment</Text>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    
    linkText: {
        color: 'white',
        fontSize: 18,
        marginLeft:40
    },
});

export default DriverScreen;
