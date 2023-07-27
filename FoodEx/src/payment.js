import React, { useState } from 'react';
import { Text, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from '../assets/constants/colors';
import Btn2 from '../assets/buttons/btn2';
import {PaymentItemCard, PaymentItemCash} from './paymentItem';



export default function Payment({navigation}) {
    const [paymentType, setpaymentType] = useState(null)

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 40, paddingLeft: 30, marginBottom: 20 }}>
                <MaterialIcons name="arrow-back-ios" size={22} color={colors.primary} onPress={()=>navigation.goBack()}></MaterialIcons>
                <Text style={{ fontSize: 24, fontFamily: "Poppins-SemiBold", color: colors.primary }}>Payment Method</Text>
            </View>
            <PaymentItemCash paymentType = {colors.primary}></PaymentItemCash>

            <PaymentItemCard paymentType = "#D9D9D9"></PaymentItemCard>


            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 25, paddingRight: 25, paddingTop: 100 }}>

                <Text style={{ fontSize: 14, color: colors.secondary, fontFamily: "Poppins-Medium" }}>Items Total</Text>
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: "black" }}>Rs 740</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 25, paddingRight: 25, paddingTop: 10 }}>

                <Text style={{ fontSize: 14, color: colors.secondary, fontFamily: "Poppins-Medium" }}>Delivery Fee</Text>
                <Text style={{ fontSize: 14, fontFamily: "Poppins-Medium", color: "black" }}>Rs 30</Text>
            </View>


            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 25, paddingRight: 25, paddingTop: 40 }}>

                <Text style={{ fontSize: 16, color: colors.secondary , fontFamily: "Poppins-Bold"}}>Total</Text>
                <Text style={{ fontSize: 16,color: "black", fontFamily: "Poppins-Bold" }}>Rs 770</Text>
            </View>
            <View style={{ paddingTop: 150 }}>
                <Btn2 btnLabel="Place Order" onPress={()=> navigation.navigate('PaymentDialouge')}></Btn2>
            </View>
        </View>


    );
}
