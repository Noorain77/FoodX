import React, { useState }  from "react";
import { Text, View, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../assets/constants/colors";
import Btn2 from "../assets/buttons/btn2";
import Btn4 from "../assets/buttons/btn4";
export default function FoodItem1(props){
    const [counter, setCounter] = new useState(0);
    function less() {
        if (counter != 0) {
            setCounter(counter - 1);
        }
    }
    return(
        <View style={{ height: 145, width: 350, backgroundColor: "white", borderRadius: 20, elevation: 3, marginTop: 10, alignSelf: 'center', flex:1}}>

        <View style={{ marginTop: 5, height: 100, width: 320, backgroundColor: "white", alignSelf: "center", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
            <Image source={{uri: props.photo}} style={{ height: 78, width: 81, borderRadius: 13 }} />

            <View style={{ width: 150, height: 60, marginLeft: 5, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: "black" }}>{props.title}</Text>
                <Text style={{ fontSize: 8, fontFamily: "Poppins-Regular", color: "black" }}>{props.description}</Text>
            </View>
            <View style={{ width: 85, height: 60, marginLeft: 5, justifyContent: "space-between", alignItems: "flex-end" }}>
                <Text style={{ fontFamily: "Poppins-Medium", color: "black" }}>Rs {props.price} </Text>

 
             
            </View>

        </View>
        </View>
    );
}