import React from "react";
import {View, Text} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../assets/constants/colors";
import Dialog from "react-native-dialog";
import Payment from "./payment";

export default function PaymentDialouge({navigation}){
    return (
        <View>
         <View style={{marginTop: 0, paddingTop: 0}}>
         <Payment></Payment>
         </View>
          <Dialog.Container visible={true}>
            <View style = {{alignItems: "flex-end"}} ><MaterialIcons name="close" size={22} color={colors.grey} onPress = {() => {navigation.navigate("Home")}}></MaterialIcons></View>
            <Dialog.Title style={{alignSelf: "center"}}>
            <MaterialIcons name="check-circle" size={60} color={colors.primary}></MaterialIcons>
            </Dialog.Title>
            <Dialog.Description style={{fontFamily: "Poppins-SemiBold", alignSelf: "center"}}>
              Order Placed Successfully!
            </Dialog.Description>
          </Dialog.Container>
        </View>
      );
}   