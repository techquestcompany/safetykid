import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';

const backgroundImage = require('../../assets/images/HomeSecurity.jpg'); 

export default function SignupContainerScreen() {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.largeText}>Choose Who You are and create account</Text>
      </View>

      <View style={styles.getStartedLink}> 
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.5}>
          <Link href="/SignupScreen" style={styles.linkText}>Parent</Link>
        </TouchableOpacity>
      </View>

      <View style={styles.getStartedLink}>
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.5}>
          <Link href="/SignupScreen" style={styles.linkText}>Driver</Link>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    color: 'white', // Change to a contrasting color
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    fontWeight: "bold"
  },
  loginButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    width: 350,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 60,
  },
  getStartedLink: {
    marginLeft: 0,
  },
  linkText: {
    color: "yellow",
    fontSize: 20,
    textAlign: "center",
  },
});
