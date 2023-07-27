import React, { useEffect, useState } from 'react';
//import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { Text, View,  FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import FoodItem1 from './fooditem1';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from '../assets/constants/colors';
import Btn4 from '../assets/buttons/btn4';

export default function RestaurantDetailAdmin({ navigation, route }) {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [photo, setPhoto] = useState("");
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    assignData()
  }, [])

  function assignData() {
    const { item } = route.params

    setTitle(item.restaurantName)
    setRating(item.rating)
    setPhoto(item.photo)
    setCategories(item.categories)
    setRestaurantItems(item.restaurantItems)
  }


  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View>

        <Image
          style={{ borderRadius: 10, width: 390, height: 220 }}
          source={{ uri: photo }}
        />
      </View>

      <View style={{ flexDirection: "row", paddingTop: 30, paddingLeft: 20 }}>
        <Text style={{ color: colors.primary, fontSize: 24, fontFamily: "Poppins-Medium" }}>{title}</Text>
        <View style={{ flexDirection: "row", paddingLeft: 170 }}>
          <MaterialIcons name="star-rate" color="#F8F26F" size={15}></MaterialIcons>
          <Text style={{ color: colors.secondary, fontSize: 16, fontFamily: "Poppins-Medium" }}>{rating}</Text>
        </View>
      </View>


      <View style={{ paddingLeft: 20 }}>
        <FlatList
          data={categories}
          horizontal
          renderItem={({ item, index }) =>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: 'peru', paddingLeft: 10, paddingTop: 10 }}>
              {item}
            </Text>
          }
        />
      </View>


    <View>
    <FlatList
        data={restaurantItems}
        renderItem={({ item, index }) =>
          <FoodItem1 title={item.title} description={item.description} price={item.price} photo={item.photo}></FoodItem1>
        }
      />


</View>
    </View>

  )
};
