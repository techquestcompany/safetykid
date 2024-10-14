import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity,Image, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Image 
       //   source={require("../assets/images/logo.png")} // Replace with your logo path
         // style={styles.logo}
        //  resizeMode='contain' // Adjust the image size to fit within the space
        /> 
        <ImageBackground
          source={require("../assets/images/—Pngtree—dark blue cyber security background_15514541.jpg")} 
          style={styles.image}
          resizeMode='cover' 
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.largeText}>Your Child's Security</Text>
        <Text style={styles.largeText}>Our Concern</Text>
      </View>
      <View style={styles.getStartedLink}>
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.5}>
          <Link href="/SignupContainerScreen" style={styles.linkText}>
            Get Started
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center', 
  },
  logo: {
    width: 100,
    height: 100,  
    marginBottom: 30, 
  },
  image: {
    width: '98%',
    height: 500,    
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    padding: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "black",
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  getStartedLink: {
    marginLeft: 70,
  },
  linkText: {
    color: "yellow",
    fontSize: 20,
    textAlign: "center",
  },
});
