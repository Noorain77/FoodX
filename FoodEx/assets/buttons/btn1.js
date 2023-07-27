import React from "react";
import {View, Text,TouchableOpacity} from 'react-native';
import { colors } from "../constants/colors";

export default function Btn1(props, navigation){
    return(
      <TouchableOpacity style={{backgroundColor:colors.primary, borderRadius: 30, justifyContent: "center", alignItems: "center",alignSelf: "center",marginTop: 40, height: 60, width: 165}} onPress={props.onPress} >
      <Text style={{color: "white", fontSize: 20,  fontFamily: "Poppins-SemiBold"}}> {props.btnLabel} </Text>
      </TouchableOpacity>
    );
  }