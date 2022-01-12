import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button,TextInput,ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import { FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from '../Components/Card';
import HomeCard from '../Components/HomeCards';
const StreakPaused = ({navigation}) => {
 
    return (
    <LinearGradient
      colors={['#f1f4fb', '#DBE9F6', '#DBE9F6']}
      style={{height: '100%', width: '100%'}}>

      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={{width:'100%',alignItems:'center',marginTop:120}}>
        <View >
            <Image
            source={require('../Images/StreakPaused.png')}
            />
        </View>
        <View style={{}}>
            <Text style={{fontFamily:'Inter-Bold',fontSize:30,color:'#102054',marginTop:50}}>Streak Paused</Text>
        </View>
        <View style={{width:'70%'}}>
        <Text style={{fontFamily:'Inter-Normal',fontSize:14,color:'grey',textAlign:'center',marginTop:10,lineHeight:25}}>Your Progress Streak is paused until you logged in back</Text>
        </View>
        <View style={{width:'90%',height:60,backgroundColor:'#102054',justifyContent:'center',borderRadius:7,marginTop:60}}>
        <TouchableOpacity>    
            <Text style={{textAlign:'center',color:'#fff',fontFamily:'Inter-Bold',fontSize:20}}>OK</Text>
        </TouchableOpacity>
        </View>
        </View>
         
    </ScrollView>
  
 </LinearGradient>
  );
};

export default StreakPaused;
