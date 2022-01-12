import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button,TextInput,ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import { FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from '../Components/Card';
import HomeCard from '../Components/HomeCards';
const AchieveStartStreak = ({navigation}) => {
 
    return (
    <LinearGradient
      colors={['#f1f4fb', '#DBE9F6', '#DBE9F6']}
      style={{height: '100%', width: '100%'}}>
      <Header title='Achieve'/>

      <ScrollView style={{
            backgroundColor: '#fff',
            height: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 1,
            marginTop:40,
          }} showsVerticalScrollIndicator={false}>
        
          
          <TouchableOpacity
            onPress={() => navigation.navigate('/')}
            style={{
              marginLeft: 10,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}></TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#102054',
                width: '30%',
                top: 1,
              }}
            />
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: '#102054',
                fontSize: 20,
              }}>
              {' '}
             Start Streak{' '}
            </Text>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#102054',
                width: '30%',
                top: 1,
              }}
            />
          </View>
          <View style={{width:'100%',marginTop:100}}>          
              <TouchableOpacity>
              <View style={{alignItems:'center',width:'100%'}}>
              <Image
              style={{width:133,height:133}}
              source={require('../Images/StartStreak.png')}
              />
              </View>
              </TouchableOpacity>
              <View style={{width:'100%'}}>
                <Text style={{
                fontFamily: 'Inter-Bold',
                color: '#102054',
                fontSize: 29,
                textAlign:'center',
                marginTop:20
                }}>
                    Tap To Start Streak
                </Text>
              </View>
              </View>
    </ScrollView>
  <TouchableOpacity>
      <View style={{backgroundColor:'#102054',height:50}}>
          <Text style={{alignSelf:'center',fontSize:20,color:'#fff',marginTop:10,fontFamily:'Inter-Bold'}} >Back</Text>
      </View>
  </TouchableOpacity>
 </LinearGradient>
  );
};

export default AchieveStartStreak;
