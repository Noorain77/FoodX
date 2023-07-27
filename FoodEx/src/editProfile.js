import React, { useState, useEffect } from "react";
import {View, Text, ToastAndroid} from "react-native";
import { colors } from "../assets/constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextField3 from "./textField3";
import Btn3 from "../assets/buttons/btn3";
import { auth, database } from "../firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function EditProfile({navigation}){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [test, setTest] = useState(false);
    const [userId, setUserId] = useState("");

    function UpdateProfile(){
        database.ref(`/users/${userId}`).update(
            {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email
            }
        ).then(()=> {
            ToastAndroid.show("Information Updated Successfully!", ToastAndroid.SHORT)
            setTest(true)
            navigation.navigate("MyProfile")
        }).catch((error)=> ToastAndroid.show(error.message, ToastAndroid.SHORT) )
        
    }

   async function fetchData(){
    try{
        const value = await AsyncStorage.getItem("uid")
        if(value!==null){
            setUserId(value);
            database.ref(`/users/${value}`).once("value").then(snapshot=> {
                setFirstName(snapshot.val().firstName)
                setLastName(snapshot.val().lastName)
                setPhoneNumber(snapshot.val().phoneNumber)
                setEmail(snapshot.val().email)
            })
        } 
    }
    catch(error){
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
        <MaterialIcons name = "arrow-back-ios" size = {22} color = {colors.primary} onPress={()=> navigation.navigate('MyProfile')} ></MaterialIcons>
        <Text style = {{fontSize : 24, fontFamily: "Poppins-SemiBold", color: colors.primary}}>Edit Profile</Text>
        </View>

        <TextField3 label = "First Name" placeholder = "Ali" value = {firstName} onChangeText={setFirstName}/>
        <TextField3 label = "Last Name" placeholder = "Murtaza" value = {lastName} onChangeText = {setLastName}/>
        <TextField3 label = "Phone Number" placeholder = "123-456-986"  value = {phoneNumber} onChangeText = {setPhoneNumber}/>
        <TextField3 label = "Email" placeholder = "abc@gmail.com" value = {email} onChangeText = {setEmail}/>

        <Btn3 btnLabel="Save Changes" onPress={UpdateProfile} />

        </View>
    );
}
