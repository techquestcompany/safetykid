import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, Text } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
    const [studentName, setStudentName] = useState('');

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/HomeSecurity.jpg")}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={{ fontSize: 20 }}>Find a Student's Location</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter the student's name"
                value={studentName}
                onChangeText={setStudentName}
            />
            <Link 
                style={styles.link} 
                href={`/studentLocation?name=${studentName}`}
            >
                Search
            </Link>
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
    image: {
        width: '100%',
        height: 400,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    link: {
        backgroundColor: "black",
        width: "100%",
        height: 50, 
        borderRadius: 5,
        justifyContent: 'center', 
        alignItems: 'center', 
        color:"white",
        fontSize:25,
        paddingLeft:130
    },
   
});

export default HomeScreen;
