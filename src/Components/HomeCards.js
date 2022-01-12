import React from 'react';
import {View, Text, Image, TouchableOpacity, Touchable} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeCard(props) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        height: 250,
        borderRadius: 10,
        padding:10,
        
      }}>
      <TouchableOpacity>
      <View style={{flexDirection:'row'}}>
          <View style={{marginRight:10,borderRadius:25,borderColor:'#102054',borderWidth:2,width:50,height:50,alignItems:'center',justifyContent:'center'}}>
              <Image
              
              style={{width:30,height:30,borderRadius:15}}
              source={require('../Images/Change.png')}/>
          </View>
          <View>
                <Text style={{fontSize:18,color:'#102054',fontFamily:'Inter-Bold'}}>{props.title}</Text>
                <Text style={{fontSize:10}}><MaterialCommunityIcons name={"clock-outline"} color={"#102054"} size={10} />
{''} {props.time}</Text>
          </View>
      </View>
      <View>
          <Image
          style={{width:'100%',height:'70%',marginTop:10}}
          source={require('../Images/ICANT.png')}
          />
      </View>
      <View style={{marginBottom:80,position:'absolute',top:190,left:10}}>
          <Text >{props.descr}</Text>
          </View>
          </TouchableOpacity>
    </View>
  );
}
