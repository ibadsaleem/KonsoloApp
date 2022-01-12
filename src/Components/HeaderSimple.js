import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header(props) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 100,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
      }}>
   
      <View style={{flexDirection:'row'}}>
        <View>
        <MaterialCommunityIcons name={"plus-thick"} color={"#ff2366"} size={15} style={{paddingTop:2}} />
        </View>
         <View >
        <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'#ff2366'}}>17</Text>
        <Text style={{fontFamily:'Inter-Bold',fontSize:12}}>Plans</Text>
        </View>
      </View>
      
      <View style={{flexDirection:'row',borderLeftWidth:1,paddingRight:5,paddingLeft:5,borderColor:'lightgrey'}}>
        <View>
        <MaterialCommunityIcons name={"plus-thick"} color={"#f9a91c"} size={15} style={{paddingTop:2}} />
        </View>
         <View>
        <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'#f9a91c'}}>10</Text>
        <Text style={{fontFamily:'Inter-Bold',fontSize:12}}>Achievements</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',borderLeftWidth:1,paddingRight:5,paddingLeft:5,borderColor:'lightgrey'}}>
        <View>
        <MaterialCommunityIcons name={"plus-thick"} color={"#02bc77"} size={15} style={{paddingTop:2}}  />
        </View>
         <View >
        <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'#02bc77'}}>37</Text>
        <Text style={{fontFamily:'Inter-Bold',fontSize:12}}>Milestones</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',paddingRight:5,paddingLeft:5,borderLeftWidth:1,borderLeftColor:'lightgrey'}}>
        <View>
        <MaterialCommunityIcons name={"plus-thick"} color={"#4791ff"} size={15} style={{paddingTop:2}} />
        </View>
         <View >
        <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'#4791ff'}}>19</Text>
        <Text style={{fontFamily:'Inter-Bold',fontSize:12}}>Streak</Text>
        </View>
      </View>
    </View>
  );
}
