import React, { useState, useEffect } from "react";
import {View, Text, ToastAndroid} from "react-native";
import { colors } from "../assets/constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextField3 from "./textField3";
import Btn3 from "../assets/buttons/btn3";
import { auth, database } from "../firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChangeAddress({navigation}){

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [test, setTest] = useState(false);
    const [userId, setUserId] = useState("");

    function UpdateAddress(){
        database.ref(`/users/${userId}`).
        update({city: city, country: country, streetAddress: streetAddress}).
        then(
            ()=> {
                ToastAndroid.show("Address Updated Successfully!", ToastAndroid.SHORT)
                setTest(true)
                navigation.navigate("MyProfile")
            }
        ).catch((error)=> ToastAndroid.show(error.message, ToastAndroid.SHORT))
    }

    async function fetchData(){
        try {
            const value = await AsyncStorage.getItem("uid")
            
            if(value !== null) {
                setUserId(value);
                database
                    .ref(`/users/${value}`)
                    .once("value")
                    .then(snapshot => {
                        console.log('User data: ', snapshot.val());
                        setStreetAddress(snapshot.val().streetAddress)
                        setCity(snapshot.val().city)
                        setCountry(snapshot.val().country)
                    });   
            }
          } catch(error) {
            console.log(error)
          }
    }

    useEffect(()=> {
       
        fetchData();
    },

    [test]);

    return(
        <View style = {{backgroundColor :"white", flex: 1}}>
        <View style = {{flexDirection : "row", alignItems: "center", paddingTop: 40, paddingLeft: 30, marginBottom: 20}}>
        <MaterialIcons name = "arrow-back-ios" size = {22} color = {colors.primary} onPress={()=> navigation.navigate("MyProfile")}></MaterialIcons>
        <Text style = {{fontSize : 24, fontFamily: "Poppins-SemiBold", color: colors.primary}}>Change Address</Text>
        </View>

        <TextField3 label = "Country" placeholder = "Pakistan" value = {country} onChangeText = {setCountry}/>
        <TextField3 label = "City" placeholder = "Islamabad" value = {city} onChangeText = {setCity}/>
        <TextField3 label = "Street Address" placeholder = "Address here"  value = {streetAddress} onChangeText = {setStreetAddress}/>

        <Btn3 btnLabel="Save Changes" onPress={UpdateAddress} />

        </View>
    );
}
