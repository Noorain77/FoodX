import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, database } from '../firebase';


export default function MyProfile({ navigation, route }) {

  const [name, setName] = useState("")


  async function fetchData() {
    try {
      const value = await AsyncStorage.getItem("uid")
      if (value !== null) {
        database.ref(`/users/${value}`).once("value").then(snapshot => {
          let name = snapshot.val().firstName + snapshot.val().lastName
          console.log(name)
          setName(name)
        })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    fetchData();
  },

    []);

  function LogOut(){
    auth.signOut().then(() => {
      ToastAndroid.show("Signed Out!", ToastAndroid.SHORT)
      navigation.navigate("Login")
    });
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ marginTop: 10, flexDirection: 'row' }}>
        <Text style={{ marginTop: 14, fontFamily: 'Poppins-SemiBold', color: '#274116', marginLeft: 14, fontSize: 29 }}>
          My Profile
        </Text>
        <Icon name="log-out-outline" style={{ backgroundColor: "#274116", borderRadius: 50, height: 50, width: 50, marginLeft: 130 }}
          size={35} color={'white'} onPress={LogOut}/>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Image style={{ marginLeft: 130, borderRadius: 70, marginTop: 30, width: 128, height: 128 }}
          source={require('../assets/images/logopic.jpg')} />
        <Text style={{ marginLeft: 150, marginTop: 5, fontFamily: "Poppins-SemiBold", fontSize: 16 }} >{name}</Text>
      </View>

      <View
        style={{
          elevation: 4,
          shadowColor: 'black', marginRight: 20, marginLeft: 15, marginTop: 30, marginBottom: 10, flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 20, width: 353, height: 64
        }}>
        <Icon name="pencil-sharp" style={{ height: 30, width: 30, marginTop: 10, marginLeft: 10, backgroundColor: "#B48D42", borderRadius: 20 }}
          size={25} color={'#4D4D4D'} />

        <Text style={{ fontFamily: "Poppins-Medium", alignItems: "center", padding: 10, marginTop: 10, fontSize: 18 }} onPress={() => navigation.navigate("EditProfile")} > Edit Profile </Text>

        <Icon name="chevron-forward-outline" style={{ marginTop: 11, marginLeft: 145 }} marginLeft={46} size={32} color={'black'} />
      </View>
      <View style={{
        elevation: 4,
        shadowColor: 'black', marginRight: 20, marginLeft: 15, marginTop: 10, marginBottom: 10, flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 20, width: 353, height: 64
      }}>

        <Icon name="lock-closed" style={{ height: 30, width: 30, marginTop: 15, marginLeft: 10, backgroundColor: "#B48D42", borderRadius: 60 }}
          size={25} color={'#4D4D4D'} />
        <Text style={{ fontFamily: "Poppins-Medium", alignItems: "center", padding: 10, marginTop: 10, fontSize: 18, fontSize: 18 }} onPress={() => navigation.navigate("ChangePassword")} > Change Password </Text>
        <Icon name="chevron-forward-outline" style={{ marginTop: 11, marginLeft: 75 }} marginLeft={46} size={32} color={'black'} />
      </View>
      <View style={{
        elevation: 4,
        shadowColor: 'black', marginRight: 20, marginLeft: 15, marginTop: 20, marginBottom: 20, flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 20, width: 353, height: 64
      }}>
        <Icon name="location" style={{ height: 30, width: 30, marginTop: 11, marginLeft: 10, backgroundColor: "#B48D42", borderRadius: 50 }}
          size={25} color={'#4D4D4D'} />

        <Text style={{ fontFamily: "Poppins-Medium", alignItems: "center", padding: 10, marginTop: 10, fontSize: 18 }} onPress={() => navigation.navigate("ChangeAddress")} > Change Address </Text>
        <Icon name="chevron-forward-outline" style={{ marginTop: 11, marginLeft: 85 }}
          marginLeft={46} size={32} color={'black'} />
      </View>
      <View style={{
        elevation: 4,
        shadowColor: 'black', marginRight: 20, marginLeft: 15, marginTop: 10, marginBottom: 10, flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 20, width: 353, height: 64
      }}>

        <Icon name="fast-food" style={{ height: 30, width: 30, marginTop: 11, marginLeft: 10, backgroundColor: "#B48D42", borderRadius: 50 }}
          size={25} color={'#4D4D4D'} />
        <Text style={{ fontFamily: "Poppins-Medium", alignItems: "center", padding: 10, marginTop: 10, fontSize: 18 }} onPress={() => navigation.navigate("MyOrders")} > My Orders </Text>
        <Icon name="chevron-forward-outline" style={{ marginTop: 11, marginLeft: 140 }} size={32} color={'black'} />
      </View>

    </View>
  );
}
