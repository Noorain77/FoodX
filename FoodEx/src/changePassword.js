import React, {useState} from "react";
import { View, Text, ToastAndroid} from "react-native";
import Btn3 from "../assets/buttons/btn3";
import TextField from "./textField";
import { colors } from "../assets/constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {auth} from "../firebase";

export default function ChangePassword({navigation}) {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setconfirmNewPassword] = useState('');

    function UpdatePassword(){
        if(newPassword===confirmNewPassword){
            var user = auth.currentUser;
                user.updatePassword(newPassword).then(() => {
                    ToastAndroid.show("Password Updated Successfully", ToastAndroid.SHORT) 
                    navigation.navigate("MyProfile")
                }).catch((error) => {  ToastAndroid.show(error.message, ToastAndroid.SHORT) });
        }
        else{
            ToastAndroid.show("Passwords do not match!", ToastAndroid.SHORT)
        }
       
        
    }


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 40, paddingLeft: 30, marginBottom: 20 }}>
                <MaterialIcons name="arrow-back-ios" size={22} color={colors.primary} onPress={()=> navigation.navigate("MyProfile")} ></MaterialIcons>
                <Text style={{ fontSize: 24, fontFamily: "Poppins-SemiBold", color: colors.primary }}>Change Password</Text>
            </View>
            <View style={{ width: 380, paddingLeft: 20 }}>
                <TextField placeholder="Enter Old Password" secureTextEntry={true} value = {password} onChangeText = {setPassword}/>
                <TextField placeholder="Enter New Password" secureTextEntry={true}  value = {newPassword} onChangeText = {setNewPassword} />
                <TextField placeholder="Re-enter Password" secureTextEntry={true} value = {confirmNewPassword} onChangeText = {setconfirmNewPassword}/>
            </View>
            <Btn3 btnLabel="Save Changes" onPress = {UpdatePassword}/>
        </View>
    );
}
