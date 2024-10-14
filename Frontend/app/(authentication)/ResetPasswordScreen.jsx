// screens/PasswordResetScreen.js
import React, { useState } from 'react';
import {Link} from "expo-router";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
//import axios from 'axios';

const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    if (!email) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    }

    try {
    //  const response = await axios.post('http://your-backend-url/reset-password', { email });
     // Alert.alert('Success', response.data.message);
    } catch (error) {
      Alert.alert('Reset Failed', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Your Password</Text>
      <Text style={styles.description}>
        Enter your email address below to receive a password reset link.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
       <Link href="/HomeScreenContainer" onPress={()=> {Alert.alert("hey you are welcome")}} style={styles.loginBtn} >Send</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  loginBtn:{
    backgroundColor:"#000",
    color:"white",
    paddingLeft:"40%",
    fontSize:25

  }
});

export default PasswordResetScreen;
