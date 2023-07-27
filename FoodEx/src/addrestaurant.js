import React, { useState } from 'react';
//import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground, ToastAndroid } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { xorBy } from 'lodash'

import { auth, database } from "../firebase";
import Icon from "react-native-vector-icons/Ionicons";


export default function AddRestaurant({ navigation, route }) {
  const [name, setname] = React.useState('');
  const[imageUri,setimageUri] = React.useState('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80');
  const [branch, setbranch] = React.useState('');
  const [rating,setrating] =  React.useState(0);
  const [Photo,setphoto] =  React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [data2, setData2] = React.useState([])
  const data = [
    { key: '1', value: 'Pizza' },
    { key: '2', value: 'Drinks' },
    { key: '3', value: 'Burger' },
    { key: '4', value: 'Pasta' },
    { key: '5', value: 'Rice' },
    { key: '6', value: 'Drinks' },
  ];

  function adddata() { 
   
    let tempData;
    database
      .ref('/restaurants/items/')
      .once('value')
      .then(snapshot => 
        {
          tempData = snapshot.val()
          tempData.push({
          restaurantName: name,
          branch: branch,
          rating: 4.5,
          categories:selected,
          photo:imageUri,
          restaurantItems: []
       
        })
        database.ref('/restaurants/items/').set(tempData).then((res) => {
        
          ToastAndroid.show("Restaurant added Successfully", ToastAndroid.SHORT)
         navigation.navigate("AddItem", {index: tempData.length-1}
             )
       })

          .catch((error) => {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
            console.log("Error : ", error.message)
          })

      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
        console.log("Error : ", error.message)
      });
   
  }

  // const chooseFile = () => {
  //   let options = {
  //     title: 'Select Image',
  //     customButtons: [
  //       {
  //         name: 'customOptionKey',
  //         title: 'Choose Photo from Custom Option'
  //       },
  //     ],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log(
  //         'User tapped custom button: ',
  //         response.customButton
  //       );
  //       alert(response.customButton);
  //     } else {
  //       let source = response;
  //       // You can also display the image using data:
  //       // let source = {
  //       //   uri: 'data:image/jpeg;base64,' + response.data
  //       // };
  //       setFilePath(source);
  //     }
  //   });
  // };






  // const options = {
  //   title: 'Select Image',
  //   storageOptions: {
  //     saveToPhotos:true,
  //     mediaType:'photo',
  //     skipBackup: true,
  //     path: '../main/images',
  //   },
  // };

  
  // const openGallery= async ()=>{
  //   const result = await launchImageLibrary(options);
  // //  console.log(result.assets[0].uri);
  //   setimageUri(result.assets[0].uri);
  // } 

  return (
    <View style= {{flex: 1}}>
      <ImageBackground
        style={{ width: 390, height: 754 }}
        source={require('../assets/images/background.jpg')}>

        <View style={{ marginTop: 25, flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')} style={{ marginLeft: 12 }}>
            <Icon name="chevron-back-outline" style={{ marginTop: 5 }} size={28} color={'#274116'} />
          </TouchableOpacity>
          <Text style={{ fontFamily: 'Poppins-Bold', color: '#274116', marginLeft: 6, fontSize: 26 }}>
            Restaurant Infomation
          </Text>
        </View>
        <View style={{ marginTop: 14, flexDirection: 'column' }}>
          <Text style={styles.text}>
            Name
          </Text>
          <TextInput value={name} onChangeText={setname} placeholder='   Name of Restaurant' style={styles.textbox}>
          </TextInput>
          <Text style={styles.text}>
            Branch
          </Text>
          <TextInput value={branch} onChangeText={setbranch} placeholder='   Branch Name' style={styles.textbox}>
          </TextInput>
          <Text style={styles.text}>
            Select Product Category
          </Text>
          <View style={{ alignItems: 'center', zIndex: 1 }}>

            <MultipleSelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              arrowicon={<Icon name="chevron-down" size={22} style={{ marginTop: 5 }} color={'#274116'} />}
              searchicon={<Icon name="search-outline" style={{ marginBottom: 4 }} size={20} color={'#274116'} />}
              boxStyles={{
                width: 340, borderWidth: 2,
                borderRadius: 12
              }}
              placeholderTextColor='#696969'
              inputStyles={{
                fontSize: 17, color: '#696969', fontFamily:
                  'Poppins-SemiBold', marginTop: 2, marginLeft: 2
              }}
              fontFamily='Poppins-SemiBold'
              dropdownTextStyles={{ fontSize: 22, color: 'dimgray' }}
              dropdownStyles={{ backgroundColor: 'gainsboro' }}
              badgeTextStyles={{ fontfamily: 'Poppins-Regular', fontSize: 14 }}
              badgeStyles={{ backgroundColor: '#274116' }}
              labelStyles={{ fontSize: 18, fontFamily: 'Poppins-SemiBold' }}
              label="Categories"
            />
          </View>
          <View style={{ marginTop: 390, position: 'absolute' }}>
            <Text style={styles.text}>
              Upload Photo
            </Text>
            <View style={{
              borderStyle: 'dashed',
              borderWidth: 2, marginLeft: 40, backgroundColor: '#d3d3d3', borderColor: 'black', marginTop: 10, width: 320, height: 160
            }}>
              <TouchableOpacity >
                <Image source={{uri:imageUri}} resizeMode='contain'  style={{height:140,width:370, }}></Image>
                </TouchableOpacity>
              {/* <Image
                style={{ marginTop: 50, alignSelf: 'center', width: 31, height: 25 }}
                source={require('../main/images/cameraimage.png')}
              /> */}
              {/* <TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', marginTop: 15, marginLeft: 50, fontSize: 20 }}>
                  Click Here To Upload
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={adddata} style={{ marginTop: 25, width: 170, height: 60, marginLeft: 60, borderRadius: 50, backgroundColor: '#274116' }} >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontFamily: 'Poppins-Bold', marginLeft: 45, fontSize: 22, marginTop: 12, color: 'white' }}>
                    Next
                  </Text>

                  <Icon name="arrow-forward-outline" style={{ marginTop: 16 }} marginLeft={19} size={29} color={'white'} />

                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );


}
const styles = StyleSheet.create({
  textbox:
  {
    fontFamily: 'Poppins-Bold',
    height: 55,
    marginLeft: 28,
    margin: 12,
    width: 340,
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 18,
    padding: 10,
    flexDirection: 'row',
    color: '#696969'
  },

  text:
  {
    marginTop: 2,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginLeft: 25,
    color: '#696969',
  },
  text1:
  {
    height: 70,
    marginLeft: 28,
    margin: 12,
    width: 300,
    borderWidth: 0.5,
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