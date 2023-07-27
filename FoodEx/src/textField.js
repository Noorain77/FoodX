import React from "react";
import {TextInput, View} from 'react-native';
import { colors } from "../assets/constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TextField(props){
  return(
    <View style={{flexDirection: "row", backgroundColor : "white", alignItems: "center", height: 58, borderRadius: 15, elevation: 4, paddingLeft: 10, marginTop: 30}}>
    <MaterialIcons name= {props.name} size = {18} color= {colors.secondary} ></MaterialIcons>
    <TextInput {...props} placeholderTextColor={colors.secondary} style={{height: 58, width: 342, borderRadius: 15, color: colors.primary,  backgroundColor: "white",  paddingTop: 15, paddingLeft: 10, fontFamily:"Poppins-Regular"}}>
    </TextInput>
    </View>
  );
}