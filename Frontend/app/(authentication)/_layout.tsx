import React from "react";
import { Stack } from "expo-router";


 export default function AuthenticatorLayout(){

    return(
        <Stack>
            <Stack.Screen name="LoginScreen" options={{ title:"Login"}} />

            <Stack.Screen name="SignupScreen" options={{ title:"Signup"}} />
            <Stack.Screen name="SignupContainerScreen" />
            <Stack.Screen name="ResetPasswordScreen" />
        </Stack>
    )
 }