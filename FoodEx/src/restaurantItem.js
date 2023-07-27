import React, { useState }  from "react";
import { Text, View, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../assets/constants/colors";

export default function RestaurantItem(){
    const [counter, setCounter] = new useState(0);
    function less() {
        if (counter != 0) {
            setCounter(counter - 1);
        }
    }
    return(
        <View style={{  height: 100, width: 320, backgroundColor: "white", alignSelf: "center", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
        <Image source={require('../assets/images/McChicken.jpeg')} style={{ height: 78, width: 81, borderRadius: 13 }} />

        <View style={{ width: 150, height: 60, marginLeft: 5, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: "black" }}>McChicken</Text>
            <Text style={{ fontSize: 8, fontFamily: "Poppins-Regular", color: "black" }}>The classic combination! It’s the simple things that matter. Our quality chicken breast, cooked in a seasoned tempura coating, topped with fresh grown lettuce</Text>
        </View>
        <View style={{ width: 85, height: 60, marginLeft: 5, justifyContent: "space-between", alignItems: "flex-end" }}>
            <Text style={{ fontFamily: "Poppins-Medium", color: "black" }}>Rs 370 </Text>

            <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="remove-circle" size={25} color={colors.secondary} onPress={less}></MaterialIcons>
                <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium", color: "black" }}> {counter} </Text>
                <MaterialIcons name="add-circle" size={25} color={colors.secondary} onPress={() => setCounter(counter + 1)}></MaterialIcons>
            </View>
        </View>
    </View>
    );
}