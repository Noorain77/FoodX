import React, { useState } from 'react';
//import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { Text, View, Alert ,StyleSheet ,FlatList,Image ,TouchableOpacity,TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {categorydata} from './Burgercategory';
export default function restaurantdetail({ navigation, route })
{ 
const {name , rating1 , categ , categ2 , categ4 , categ5 ,imge} = route.params;
const [data, setdata] = React.useState('1');

return(
<View>
  <View>

  <Image
              style={{  borderRadius:10 , width:390, height: 220}}
              source={{uri : imge}}
            />
  </View>
    <View style = {{marginLeft : 20 , justifyContent:'space-between' , width:350, marginTop: 29,flexDirection:'row'}}>
    <View >
    <TouchableOpacity  onPress={() => { setdata('1'); }}>
  <Text style = {{fontSize:20,fontFamily:'Poppins-SemiBold' ,color:'peru'}}>
 {categ}
  </Text>
  </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity  onPress={() => { setdata('2'); }}>
  <Text style = {{fontSize:20,fontFamily:'Poppins-SemiBold' ,color:'peru'}}>
{categ2}
  </Text>
  </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity  onPress={() => { setdata('4'); }}>
  <Text style = {{fontSize:20,fontFamily:'Poppins-SemiBold' ,color:'peru'}}>
 {categ4 }
  </Text>
  </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity  onPress={() => { setdata('5'); }}>
  <Text style = {{fontSize:20,fontFamily:'Poppins-SemiBold' ,color:'peru'}}>
 {categ5 }
  </Text>
  </TouchableOpacity>
    </View>
    </View>
    {data === '1'?
    
    <View style={{flexDirection:'row'}}>
    
    <FlatList
   
 
  data={categorydata}
  keyExtractor={item => item.id}
  renderItem={({item, index}) =>
  <View>
  <View style = {{ marginTop : 30 , flexDirection:'row' }}>
 
 <Image
              style={{  marginTop : 5 ,marginLeft : 10 ,borderRadius:10 , width:110, height: 90}}
              source={{uri : item.image}}
            />
            <View style = {{marginLeft:27,flexDirection:'column' , width:120}}>
            <Text style = {{ marginLeft:5 , fontSize:18 , color:'black',fontFamily:'Poppins-SemiBold'}}>
         {item.Name}
</Text> 
<Text style = {{ marginLeft:5 , fontSize:10 , color:'black',fontFamily:'Poppins-SemiBold'}}>
         {item.Description}
</Text> 
</View>
<View style = {{marginTop:15,marginLeft:50,flexDirection:'column'}}>
 <Text style = {{fontSize:17 , color:'black',fontFamily:'Poppins-SemiBold'}} >{item.Price}</Text>
<View style ={{flexDirection:'row'}}>
<Icon name="pencil-outline" style = {{marginTop:7, marginLeft:5 ,fontWeight:'bold'}} size ={17}  color = {'peru'} />
<Icon name="trash-outline" style = {{marginTop:7, marginLeft:7 ,fontWeight:'bold'}} size ={17}  color = {'peru'} onPress={() =>Alert.alert(
       "Alert Title",
       "Are you sure you want to Delete this restaurant",
      [
        {
          text: "No",
          onPress: () => console.log("Not Deleting the restaurant"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => console.log("Delete the restaurant") }  ]
        ) }/>
  </View>
  </View>
    </View>
    
    </View>
  }
    />
    
    </View>
    :data === '5'?
    
    <View style={{flexDirection:'row'}}>
    
    <FlatList
   
   keyExtractor={item => item.id}
  data={categorydata}
  renderItem={({item, index}) =>
  <View style = {{ marginTop : 28 , flexDirection:'row' }}>
      <View style = {{marginLeft:25, marginTop : 10 ,flexDirection:'column'}}>
            <Text style = {{ marginLeft:5 , fontSize:20 , color:'black',fontFamily:'Poppins-SemiBold'}}>
         {item.pepsiname}
</Text> 
<Text style = {{ marginLeft:5 , fontSize:15, color:'black',fontFamily:'Poppins-SemiBold'}}>
         {item.pepsiPrice}
</Text> 
</View>
  <View>
  <Image
              style={{  marginTop : 5 ,marginLeft : 190 ,borderRadius:10 , width:80, height:110}}
              source={{uri : item.pepsiimage}}
            />
            </View>
            
    </View>
  }
    />
    
    </View>
    :
    <View>
     

        </View>
}

    
</View>

)};
