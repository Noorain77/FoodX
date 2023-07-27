import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from '../assets/constants/colors';
import Btn2 from '../assets/buttons/btn2';
import CartItem from './cartItem';
import OrderItem from './orderItem';


export default function Order({navigation}) {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 40, paddingLeft: 30, marginBottom: 20 }}>
                <MaterialIcons name="arrow-back-ios" size={22} color={colors.primary} onPress={()=> navigation.navigate("MyProfile")}></MaterialIcons>
                <Text style={{ fontSize: 24, fontFamily: "Poppins-SemiBold", color: colors.primary }}>My Orders</Text>
            </View>

            <OrderItem></OrderItem>
            <OrderItem></OrderItem>

        </View>


    );
}
