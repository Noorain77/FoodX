import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, TabActions} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/login';
import SignUp from './src/signUp';
import ChangeAddress from './src/changeAddress';
import Cart from './src/cart';
import Order from './src/order';
import Payment from './src/payment';
import PaymentDialouge from './src/paymentDialouge';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from './assets/constants/colors';
import ForgotPassword from './src/forgotPassword';
import ChangePassword from './src/changePassword';
import MainScreen from './src/mainscreen';
import MyProfile from './src/myProfile';
import EditProfile from './src/editProfile';
import Restaurant from './src/restaurant';
import AdminNav from './src/adminNav';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MainScreen" component={MainScreen}/>
    <Stack.Screen name="Restaurant" component={Restaurant}/>
    <Stack.Screen name="Ress" component={Restaurant}/>
   
  </Stack.Navigator>
  );
}

function CartStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MyCart" component={Cart}/>
    <Stack.Screen name="Payment" component={Payment}/>
    <Stack.Screen name="PaymentDialouge" component={PaymentDialouge}/>
  </Stack.Navigator>
  );
}

function ProfileStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MyProfile" component={MyProfile}/>
    <Stack.Screen name="EditProfile" component={EditProfile}/>
    <Stack.Screen name="ChangePassword" component={ChangePassword}/>
    <Stack.Screen name="ChangeAddress" component={ChangeAddress}/>
    <Stack.Screen name="MyOrders" component={Order}/>
  </Stack.Navigator>
  );
}

function Root() {
  return (
    <Tab.Navigator screenOptions={({route})=> ({
      headerShown: false,
      tabBarStyle: {
            paddingVertical: 5,
            elevation: 20,
            backgroundColor: "white",
            position: "absolute",
            height: 60,
            paddingBottom: 6,
          },
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === "Home"){
          iconName = focused ? 'home' : 'home';
        }
        else if (route.name === "Cart"){
          iconName = focused ? 'shopping-cart' : 'shopping-cart';
        }
        else if (route.name === "Profile"){
          iconName = focused ? 'person' : 'person';
        }
        return <MaterialIcons name={iconName} size = {size} color= {color}></MaterialIcons>
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.grey,
    })}>
      <Tab.Screen name="Home" component= {HomeStack}/>
      <Tab.Screen name="Cart" component= {CartStack}/>
      <Tab.Screen name="Profile" component= {ProfileStack}/>
    </Tab.Navigator>
  );
}



export default function App(){
 
  return(
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          
        <Stack.Screen name= "Login" component={Login} />
        <Stack.Screen name= "AdminNav" component={AdminNav} />
        <Stack.Screen name= "SignUp" component={SignUp}/>
        <Stack.Screen name= "ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name= "Cart" component={Cart}/>
         <Stack.Screen name= "Root" component={Root}/>
       
      </Stack.Navigator>
     </NavigationContainer>
   

  );
}

