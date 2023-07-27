import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, Alert, ToastAndroid } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { RestaurantData } from './Data';
import { database } from "../firebase"


export default function SecondScreen({ navigation, route }) {
  const [data, setdata] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  async function fetchData() {
    try {
      database.ref('/restaurants/').once('value').then((snap) => {
        console.log(snap.val().items)
        setRestaurants(snap.val().items)
      }
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <View style={{ flex: 1 }} >
      <View style={{ marginTop: 25, flexDirection: 'row' }}>
        <Image
          style={{ marginLeft: 20, borderRadius: 10, marginTop: 2, width: 60, height: 60 }}
          source={require('../assets/images/logopic.jpg')}
        />
        <View style={{ marginTop: 12, flexDirection: 'column' }}>

          <Text style={{ fontFamily: 'Poppins-Bold', marginTop: 10, color: '#274116', fontSize: 20, marginTop: 5, marginLeft: 25 }}>
            Hello Admin
          </Text>
        </View>

      </View>
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, color: '#274116', justifyContent: "center", alignSelf: 'center' }}>
        Restaurant List
      </Text>
      <FlatList
        data={restaurants}
        renderItem={({ item, index }) =>
          <View style={{ marginTop: 20 }}>

            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetailAdmin', {
              item: item
            })}>

              <Image
                style={{ marginLeft: 29, borderRadius: 10, marginTop: 2, width: 350, height: 200 }}
                source={{ uri: item.photo }}
              />
            </TouchableOpacity>
            <View style={{ marginTop: 8, flexDirection: 'row' }}>
              <View >
                <Text style={{ fontSize: 18, marginLeft: 28, color: '#274116', fontFamily: 'Poppins-Bold' }}>{item.restaurantName} </Text>
                <Text style={{ fontSize: 18, marginLeft: 28, color: '#274116', fontFamily: 'Poppins-Bold' }}>{item.rating} </Text>
              </View>
              <View style={{ position: 'absolute', width: 100, borderRadius: 12, height: 65, marginLeft: 280, backgroundColor: '#202020' }}>

                <View style={{ flexDirection: 'row' }}>
                  <Icon name="trash-outline" style={{ marginTop: 6, marginLeft: 6 }} size={20} color={'peru'} onPress={() => navigation.navigate('ChangeRestaurant', {
                    name: item.restaurantName,
                    rating1: item.rating,
                    categ: item.category1,
                    categ2: item.category2,
                    categ4: item.category4,
                    categ5: item.category5
                  })} />
                  <Text style={{ marginTop: 4, marginLeft: 7, fontSize: 17, fontFamily: 'Poppins-SemiBold', color: 'gainsboro' }}>
                    Edit
                  </Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Alert.alert(
                  "Delete Restaurant",
                  "Are you sure you want to Delete this restaurant",
                  [
                    {
                      text: "No",
                      onPress: () => console.log("Not Deleting the restaurant"),
                      style: "cancel"
                    },
                    {
                      text: "Yes", onPress: () => {
                        // let value = 3
                        // let arr = [1, 2, 3, 4, 5, 3]
                        let tempData = restaurants.filter(itemm => itemm !== item)

                        setRestaurants(tempData)
                        console.log(tempData)

                        database.ref('/restaurants/items/').set(tempData).then((res) => {
                          ToastAndroid.show("Restaurant Deleted Successfully", ToastAndroid.SHORT)
                        })
                      }
                    }
                  ]
                )} >
                  <Icon name="pencil-outline" style={{ marginTop: 4, marginLeft: 6 }} size={20} color={'peru'} />
                  <Text style={{ marginTop: 2, marginLeft: 7, fontSize: 18, fontFamily: 'Poppins-SemiBold', color: 'gainsboro' }}>
                    Delete
                  </Text>
                </TouchableOpacity>

              </View>

            </View>


          </View>
        }
      />

      <TouchableOpacity onPress={() => navigation.navigate('AddRestaurant')} style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', borderRadius: 50, width: 45, height: 45, backgroundColor: '#274116' }}>
        <Text style={{ color: 'white', marginLeft: 4, fontWeight: 'bold', fontSize: 29 }}>
          <Icon name="add-outline" style={{ marginTop: 4 }} size={39} color={'white'} />
        </Text>
      </TouchableOpacity >
    </View>
  );
}