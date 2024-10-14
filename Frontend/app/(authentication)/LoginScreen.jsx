// screens/LoginScreen.js
import React, { useState } from 'react';

import {Link} from "expo-router"


import { View, Text, TextInput,StyleSheet, Alert,ActivityIndicator,FlatList } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Add login logic here (e.g., API call)
    Alert.alert('Logged In', `Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back,  Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Link href="/HomeScreenContainer" onPress={()=> {Alert.alert("hey you are welcome")}} style={styles.loginBtn} >Login</Link>
      <View>
        <Text  >Dont have an account? <Link style={{color:"blue"}} href="/SignupScreen" >Click here</Link> </Text>
      </View>
      <View>
        <Text>Forgotten Password? <Link style={{color:"blue"}} href="/ResetPasswordScreen" >Reset</Link> </Text>
      </View>

      <View>
      
      



      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight:"bold"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius:4
  },
  loginBtn:{
    backgroundColor:"#000",
    color:"white",
    paddingLeft:"40%",
    fontSize:25

  }
});

export default LoginScreen;
