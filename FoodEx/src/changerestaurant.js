import React, { useState } from 'react';
//import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

import { MultipleSelectList } from 'react-native-dropdown-select-list'
//import MultiSelect from 'react-native-multiple-select';
import { xorBy } from 'lodash'
import { RestaurantData } from '../main/global/Data';
import Icon from "react-native-vector-icons/Ionicons";
import { auth, database } from '../firebase';
//import Icon from "react-native-vector-icons/FontAwesome";

export default function ChangeRestaurant({ navigation, route }) {
  const { name, rating1, categ, categ2, categ4, careg5 } = route.params;
  const [selected, setSelected] = React.useState([]);
  const data = [
    { key: '1', value: 'Pizza' },
    { key: '2', value: 'Drinks' },
    { key: '3', value: 'Burger' },
    { key: '4', value: 'Pasta' },
    { key: '5', value: 'Rice' },
    { key: '6', value: 'Drinks' },
  ];
  return (
    <View>
      <ImageBackground
        style={{ width: 390, height: 754 }}
        source={require('../assets/images/background.jpg')}>

        <View style={{ marginTop: 25, flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => navigation.navigate('secondscreen')} style={{ marginLeft: 12 }}>
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
          <TextInput value={name} placeholder='   Name of Restaurant' style={styles.textbox}>
          </TextInput>
          <Text style={styles.text}>
            Branch
          </Text>
          <TextInput value={name} placeholder='   Branch Name' style={styles.textbox}>
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
              <Image
                style={{ marginTop: 50, alignSelf: 'center', width: 31, height: 25 }}
                source={require('../assets/images/cameraimage.png')}
              />
              <TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', marginTop: 15, marginLeft: 50, fontSize: 20 }}>
                  Click Here To Upload
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 40, width: 170, height: 60, marginLeft: 60, borderRadius: 50, backgroundColor: '#274116' }} onPress={() => navigation.navigate('additem')}>
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
  selectBox:
  {
    height: 55,
    marginLeft: 28,
    margin: 12,
    width: 340,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row'
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