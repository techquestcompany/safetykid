// screens/SignupScreen.js
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, Alert, Pressable } from 'react-native';
//import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async () => {
    if (firstname!=="" && lastname!==""&& phone!=="") {
      Alert.alert('You authentication details will be sent to you via sms');
      return;
    }else{
      Alert.alert("All values are required")
    }

    try {
     // const response = await axios.post('http://your-backend-url/register', {
     //   email,
     //   password,
    //  });
      Alert.alert('Success', response.data.message);
      // Navigate to login or another screen if needed
    } catch (error) {
      Alert.alert('Signup Failed', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register for an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="firstname"
        keyboardType="default"
        value={firstname}
        onChangeText={setFirstName}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Lastname"
        keyboardType='default'
        
        value={lastname}
        onChangeText={setLastName}
      />

<TextInput
        style={styles.input}
        placeholder="telephone"
        keyboardType='numeric'
        
        value={phone}
        onChangeText={setPhone}
      />
      <Pressable onLongPress={() => Alert.alert("You are leaving a bounded area")}>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" onPress={handleSignup} color="#000" />
        </View>
      </Pressable>
       <Text>Already have an account?  <Link href="/LoginScreen" style={{color:"blue"}} > Login here  </Link></Text> 
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:"center" 
  },
  title: {
    fontSize: 24,
    marginBottom: 24, 
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#f0f0f0', 
  },
  buttonContainer: {
    backgroundColor: 'orange',
    borderRadius: 5,
  },
});

export default SignupScreen;
