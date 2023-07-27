import React, {useState} from "react";
import {Text, ToastAndroid} from "react-native";
import Background2 from "./background2";
import Btn1 from "../assets/buttons/btn1";
import TextField2 from "./textField2";
import { colors } from "../assets/constants/colors";
import { auth, database } from "../firebase";


export default function SignUp({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    function SignUpAuth(){
        if(password===confirmPassword){
            auth.createUserWithEmailAndPassword(email, password).
             then((response) => {
                database.ref(`/users/${response.user.uid}`).set({
                firstName : firstName,
                lastName : lastName,
                phoneNumber : phoneNumber,
                email: email,
                city: "",
                country: "",
                streetAddress: ""

            }).then((res) => {
                ToastAndroid.show("User Created Successfully", ToastAndroid.SHORT)
                navigation.navigate("Login")
            })
            }).
            
        catch((error) => {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
            console.log("Error : ", error.message)
        })
    }
    else{
        ToastAndroid.show("Your Password doesn't match!", ToastAndroid.SHORT);
    }
        
    }
    return(
        <Background2> 
            <Text style={{fontFamily: "Poppins-Bold", fontSize: 30, alignSelf:"center", color: colors.primary }}>Sign Up</Text>
            <TextField2 placeholder="First Name" name="edit" onChangeText={setFirstName} value={firstName} />
            <TextField2 placeholder="Last Name" name="edit" onChangeText={setLastName} value={lastName} />
            <TextField2 placeholder="Phone Number" keyboardType="numeric" name="phone" onChangeText={setPhoneNumber} value={phoneNumber}/>
            <TextField2 placeholder="Email"  keyboardType="email-address" name="mail-outline" onChangeText={setEmail} value={email} />
            <TextField2 placeholder="Password" secureTextEntry={true} name="lock" onChangeText={setPassword} value={password}/>
            <TextField2 placeholder="Confirm Password" secureTextEntry={true} name="lock" onChangeText={setConfirmPassword} value={confirmPassword} />
            <Btn1 btnLabel="Sign Up" onPress={SignUpAuth} /> 
        </Background2>
    );
}
