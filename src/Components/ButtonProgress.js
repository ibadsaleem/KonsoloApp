import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header(props) {
  return (
    <>
      <TouchableOpacity
        style={{
          width: '90%',
          borderWidth: 1.5,
          height: 50,
          marginTop: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          borderColor: '#102054',
          borderRadius: 5,
          marginBottom:10
        }}>
        <View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#102054',
                fontWeight: 'bold',
              }}>
              <MaterialCommunityIcons
                name={props.icon}
                size={25}
                color="#102054"
              />
              {'  '}
              {props.title}
            </Text>
          </View>
          <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
            <Feather
              name={'chevron-right'}
              style={{}}
              size={25}
              color="#102054"
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
