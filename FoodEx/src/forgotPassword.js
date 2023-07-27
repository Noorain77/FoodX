import React, {useState} from "react";
import { View, Text, ToastAndroid } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../assets/constants/colors";
import TextField from "./textField";
import Btn1 from "../assets/buttons/btn1";
import { auth } from "../firebase";

export default function ForgotPassword({navigation}) {

    const[email, setEmail] = useState("");

    function resetEmail(){
        
        auth.sendPasswordResetEmail(email).then((response)=>{
            ToastAndroid.show("Please check your email to reset password", ToastAndroid.SHORT)
            navigation.navigate("Login")
        }).catch(error=> ToastAndroid.show(error.message, ToastAndroid.SHORT))
    }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 40, paddingLeft: 30, marginBottom: 20 }}>
                <MaterialIcons name="arrow-back-ios" size={22} color={colors.primary} onPress={()=> navigation.goBack()} ></MaterialIcons>
                <Text style={{ fontSize: 24, fontFamily: "Poppins-SemiBold", color: colors.primary }}>Forgot Password</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16, width: 357, paddingTop: 100 }}>Enter your email address to receive a verification code</Text>
                <TextField placeholder="Enter your email" onChangeText={setEmail} value={email}></TextField>
                <Btn1 btnLabel="Get Code" onPress={resetEmail}></Btn1>
            </View>
        </View>
    );
}