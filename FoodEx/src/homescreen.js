import React, { useState,useEffect } from 'react';
//import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { Text, View, StyleSheet ,Image ,TouchableOpacity,TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
export default function HomeScreen({ navigation, route }) 
{
  
    return(
  <View style ={{borderRadius:45}}>
      <View  style ={{  marginTop:150}}>
      <Image
              style={{ marginLeft : 20,marginTop: 10, width:320, height: 320 }}
              source={require('../assets/images/mainlogo.png')}
            />
              <View style = {{   alignItems:'center' , borderRadius: 45,backgroundColor:'#274116' , width :387, height : 280}}>
              <Text style = {{fontFamily:'Poppins-Bold',marginTop:100 , fontSize:22,color:'white' }}> Set Up Your business with us
              </Text>
              <TouchableOpacity style={{ marginTop :40,width: 180,height : 62 , margin: 15  ,borderRadius:50, backgroundColor:'#B48D42'}}  onPress={() => navigation.navigate('SecondScreen')}>
                   <View style = {{flexDirection:'row'}}>
                   <Text style ={{fontFamily:'Poppins-Bold',   marginLeft : 45,fontSize:25 ,marginTop : 12 ,color :'white'}}>
                   Next
                   </Text>
          
                   <Icon name="arrow-forward-outline" style = {{marginTop:16}}marginLeft= {16}  size ={32}  color = {'white'}/>
                   </View>
              </TouchableOpacity>
              </View>
      </View>
      </View>
    );
  }