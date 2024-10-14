import React from "react";
import {View,Text,StyleSheet,SafeAreaView,TextInput} from "react-native"

export default function EmergencyContactScreen(){
    return(
        <SafeAreaView>
         <View>
            <Text style={styles.headerText}>  Call us in case of emergency </Text>
         </View>
         <View>
            <Text>  Call us in case of emergency </Text>
            <TextInput  value="0246567898" />
         </View>
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
       headerText:{
        color:"black",
        fontWeight:"bold",
        marginTop:"40%",
        textAlign:"center",
        fontSize:25
       },
       inputValueText:{

       } 
})
  