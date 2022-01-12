import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
 
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Header(props) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 100,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 2,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('/')}
        style={{
          marginLeft: 10,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Feather name={'chevron-left'} size={30} color="#102054" />
      </TouchableOpacity>

      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 35, width: 35}}
          source={require('../Images/AchieveIcon.png')}
        />
        <Text
          style={{
            color: '#102054',
            fontFamily: 'Inter-Bold',
            paddingTop: 3,
            fontSize: 18,
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
}
