import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button,TextInput,ToastAndroid} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Fontisto from 'react-native-vector-icons/Fontisto';
export default function TodoList(props) {
    return (
        <>
       
         <View style={{marginTop:10,marginBottom:20,flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
             <View style={{justifyContent:'center'}}><Text style={{color:'#102054',fontFamily:'Inter-Bold'}}><MaterialCommunityIcons name={"clock-outline"} color={"grey"} size={10} />{' '}{props.time}</Text></View>
            
             <TouchableOpacity style={{width:'80%',elevation:3,backgroundColor:'#fff',borderRadius:5,justifyContent:'center'}}>
                 <View style={{padding:10}}>
                     <Text style={{lineHeight:24,color:'#102054',fontFamily:'Inter-Bold'}}>{props.title}</Text>
                     <Text style={{lineHeight:24,color:'grey',fontFamily:'Inter-SemiBold',fontSize:10}}>{props.duration}</Text>
                 </View>
                 <Fontisto
                    name="arrow-move"
                    color="grey"
                    size={20} 
                    style={{position:'absolute',alignSelf:'flex-end',right:20}}
                 />
           </TouchableOpacity>  
                 
             
             </View>
         </>  
    )
}
