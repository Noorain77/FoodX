import React, { useState }  from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../assets/constants/colors";
export function PaymentItemCash(props){

    return(
        <View style={{ height: 50, width: 353, backgroundColor: "white", borderRadius: 20, elevation: 3, marginTop: 10, alignSelf: 'center', flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View style = {{flexDirection: "row", alignItems: "center", marginLeft: 10}}>
        <MaterialIcons name = "monetization-on" color={colors.secondary} size = {25}></MaterialIcons>
        <Text style = {{marginLeft: 5, fontFamily: "Poppins-Regular", fontSize: 14}}>Cash On Delivery</Text>
        </View>

        <TouchableOpacity style = {{width: 25, height: 25, borderRadius: 40, backgroundColor: props.paymentType, marginRight: 10}}>

        </TouchableOpacity>
        </View>
    );
}

export function PaymentItemCard(props){

    return(
        <View style={{ height: 50, width: 353, backgroundColor: "white", borderRadius: 20, elevation: 3, marginTop: 10, alignSelf: 'center', flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View style = {{flexDirection: "row", alignItems: "center", marginLeft: 10}}>
        <MaterialIcons name = "credit-card" color={colors.secondary} size = {25}></MaterialIcons>
        <Text style = {{marginLeft: 5, fontFamily: "Poppins-Regular", fontSize: 14}}>Credit/Debit Card</Text>
        </View>

        <TouchableOpacity style = {{width: 25, height: 25, borderRadius: 40, backgroundColor: props.paymentType, marginRight: 10}}>

        </TouchableOpacity>
        </View>
    );
}