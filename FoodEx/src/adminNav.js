import React from 'react';
import {NavigationContainer, TabActions} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homescreen';
import restaurantdetail from './restaurantdetail';
import AddItem from './additem';
import ChangeRestaurant from './changerestaurant';
import AddRestaurant from './addrestaurant';
import SecondScreen from './secondscreen';
import RestaurantDetailAdmin from './restaurantdetailadmin';
import Restaurant from './restaurant';


export default function AdminNav({navigation}){

    const Stack = createStackNavigator();

    return(
        <NavigationContainer independent>
        <Stack.Navigator initialRouteName="HomeScreen">
          
           <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }} ></Stack.Screen>
             
            <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen
            name="AddRestaurant"
            component={AddRestaurant}
            options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen
             name="ChangeRestaurant"
            component={ChangeRestaurant}
            options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen
             name="RestaurantDetailAdmin"
            component={RestaurantDetailAdmin}
            options={{ headerShown: false }}></Stack.Screen>
             
             <Stack.Screen
            name="AddItem"
            component={AddItem}
            options={{ headerShown: false }}></Stack.Screen> 
             </Stack.Navigator>
      </NavigationContainer>
    );
}