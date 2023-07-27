import React, { useState }  from "react";
import { Text, View, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../assets/constants/colors";
export default function OrderItem(){

    return(
        <View style={{ height: 180, width: 353, backgroundColor: "white", borderRadius: 20, elevation: 3, marginTop: 10, alignSelf: 'center'}}>
        <Text style={{ marginTop: 10, marginRight:15, fontSize: 16, fontFamily: "Poppins-Regular", color: "black", alignSelf: "flex-end" }}>24-10-2022</Text>

        <Text style={{ marginTop: 0, marginLeft: 20, fontSize: 18, fontFamily: "Poppins-SemiBold", color: "black" }}>McDonalds</Text>

        <View style={{ marginTop: 5, height: 90, width: 320, backgroundColor: "white", alignSelf: "center", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
            <Image source={require('../assets/images/McChicken.jpeg')} style={{ height: 78, width: 81, borderRadius: 13 }} />

            <View style={{ width: 150, height: 60, marginLeft: 5, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: "black" }}>McChicken</Text>
                <Text style={{ fontSize: 8, fontFamily: "Poppins-Regular", color: "black" }}>The classic combination! It’s the simple things that matter. Our quality chicken breast, cooked in a seasoned tempura coating, topped with fresh grown lettuce</Text>
            </View>
            <View style={{ width: 85, height: 60, marginLeft: 5, justifyContent: "space-between", alignItems: "flex-end" }}>
                <Text style={{ fontFamily: "Poppins-Medium", color: "black" }}>Rs 370 </Text>

            </View>

        </View>
        </View>
    );
}