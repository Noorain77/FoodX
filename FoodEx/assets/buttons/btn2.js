import React from "react";
import {View, Text,TouchableOpacity} from 'react-native';
import { colors } from "../constants/colors";

export default function Btn2(props){
    return(
      <TouchableOpacity style={{backgroundColor:colors.primary, borderRadius: 30, justifyContent: "center", alignItems: "center",alignSelf: "center",marginTop: 40, height: 60, width: 380}} onPress={props.onPress}>
      <Text style={{color: "white", fontSize: 20,  fontFamily: "Poppins-SemiBold", alignSelf: "center"}}>{props.btnLabel}</Text>
      </TouchableOpacity>
      
    );
  }