import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from '../Components/BottomTab';
import {FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../Components/Card';
import Header from '../Components/Header';
export default function Main(props) {
  return (          
      <>
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
                // fontWeight:'bold',
              }}>
              {' '}
              {props.title}{' '}
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
          </>
  );
}
