import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button,TextInput,ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import { FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from '../Components/Card';
import HomeCard from '../Components/HomeCards';
const AchieveProgressMyJournal = ({navigation}) => {
 
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
            marginTop:30,
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
              My Journal{' '}
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
          <View style={{marginBottom:10}}>
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
        </View>

    </ScrollView>
  <TouchableOpacity >
      <View style={{backgroundColor:'#102054',height:50}}>
          <Text style={{alignSelf:'center',fontSize:20,color:'#fff',marginTop:10}} >DONE</Text>
      </View>
  </TouchableOpacity>
 </LinearGradient>
  );
};

export default AchieveProgressMyJournal;
