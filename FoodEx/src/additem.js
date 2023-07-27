import React, { useState } from 'react';
//import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ToastAndroid, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { auth, database } from "../firebase";
//import Icon from "react-native-vector-icons/Ionicons";

export default function AddItem({ navigation, route }) {

  const restaurant = route.params.index;
  const [title, settitle] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState(0);
  const [description, setdescription] = useState('');
  const [restaurantItems, setRestaurantItems] = React.useState("");
  const [image, setImage] = React.useState("https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80")

  function adddata() {
    console.log("Restaurant ID", restaurant)
    database
      .ref(`/restaurants/items`)
      .once('value')
      .then(snapshot => {
        let tempData = snapshot.val()
        let tempResData = tempData[restaurant]
        console.log("Temp Res DQata", tempResData)
        tempResData["restaurantItems"] = [{
          title: title,
          category: category,
          photo: image,
          description: description,
          price: price
        }]
        tempData[restaurant] = tempResData

        console.log("Fianl Data", tempData)

        database.ref('/restaurants/items/').set(tempData).then((res) => {

          ToastAndroid.show("Item added Successfully", ToastAndroid.SHORT)
          navigation.navigate("SecondScreen")
        })

        console.log("temp1", tempResData)





        // tempData.restaurantItems.push({
        //   title: title,
        //   category: category,
        //   price: price,
        //   photo: photo,
        //   description: description,
        //   photo: image
        // })
        // database.ref(`/restaurants/items/${restaurant}/restaurantItems`).set(tempData).then((res) => {
        //   ToastAndroid.show("Item added Successfully", ToastAndroid.SHORT)

        // })

        //   .catch((error) => {
        //     ToastAndroid.show(error.message, ToastAndroid.SHORT);
        //     console.log("Error : ", error.message)
        //   })

      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
        console.log("Error : ", error.message)
      });

  }
  return (
    <View>
      <ImageBackground
        style={{ width: 390, height: 754 }}
        source={require('../assets/images/background.jpg')}>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('addrestaurant')} style={{ marginLeft: 12 }}>
            <Icon name="chevron-back-outline" style={{ marginTop: 8 }} size={35} marginTop={10} color={'#274116'} />
          </TouchableOpacity>

          <Text style={{ marginTop: 4, fontFamily: 'Poppins-Bold', color: '#274116', marginLeft: 4, fontSize: 29 }}>
            Add An Item
          </Text>
        </View>
        <View style={{ marginTop: 1, flexDirection: 'column' }}>
          <Text style={styles.text}>
            Title
          </Text>
          <TextInput value={title} onChangeText={settitle} placeholder='   Title of Item' placeholderStyle={styles.PlaceholderStyle} style={styles.textbox}>
          </TextInput>
          <Text style={styles.text}>
            Category
          </Text>
          <TextInput value={category} onChangeText={setcategory} placeholder='   Category Of Item' style={styles.textbox}>
          </TextInput>
          <Text style={styles.text}>
            Price
          </Text>
          <TextInput value={price} onChangeText={setprice} placeholder='   Price of Item' style={styles.textbox}>
          </TextInput>
          <Text style={styles.text} onPress={adddata}>
            Add Description
          </Text>
          <TextInput onChangeText={setdescription} value={description} placeholder='  Add detail About Item' style={styles.descriptionstyle}>
          </TextInput>
          <Text style={styles.text}>
            Upload Photo
          </Text>
          <View style={{
            borderStyle: 'dashed',
            borderWidth: 2, marginLeft: 40, backgroundColor: '#d3d3d3', borderColor: 'black', marginTop: 7, width: 300, height: 140
          }}>
            <Image
              style={{ marginTop: 40, alignSelf: 'center', width: 25, height: 25 }}
              source={require('../assets/images/cameraimage.png')}
            />

            <TouchableOpacity>
              <Text style={{ fontFamily: 'Poppins-SemiBold', marginTop: 15, marginLeft: 50, fontSize: 20 }}>
                Click Here To Upload
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={adddata} style={{ marginLeft: 120, width: 150, height: 50, marginTop: 8, borderRadius: 50, backgroundColor: '#274116' }}   >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, marginTop: 9, marginLeft: 40, color: 'white' }}>
                Next
              </Text>
              <Icon name="arrow-forward-outline" style={{ marginTop: 12 }} size={27} color={'white'} />
            </View>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  textbox:
  {
    fontFamily: 'Poppins-SemiBold',
    height: 50,
    fontSize: 18,
    marginLeft: 28,
    margin: 12,
    width: 340,
    borderWidth: 1.2,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row'
  },
  PlaceholderStyle:
  {
    fontFamily: 'Poppins-Bold',
    fontSize: 50
  },
  text:
  {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 25,
    fontSize: 18,
    color: '#696969',
  },
  descriptionstyle:
  {
    fontFamily: 'Poppins-SemiBold',
    height: 70,
    marginLeft: 28,
    margin: 12,
    width: 340,
    fontSize: 18,
    borderWidth: 1.2,
    borderRadius: 12,
    padding: 10,
  },
  dropdown:
  {
    height: 50,
    marginLeft: 28,
    margin: 12,
    width: 300,
    borderWidth: 0.5,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    placeholderTextColor: '#696969',
  }
});