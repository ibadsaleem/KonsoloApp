import React from 'react'
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from '../Components/BottomTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Card(props) {
    return (
        <View style={{backgroundColor:'#fff',width:'90%',elevation:5,marginTop:10,marginBottom:10,flexDirection:'row',justifyContent:'space-between',alignSelf:'center',alignItems:'center',padding:10,borderRadius:5}}>
                    <View >
                        <Text style={{color:'#102054',fontSize:20,fontWeight:'bold'}}>{props.title}</Text>
                        <Text>{props.members}/50 Members</Text>
                        <Text style={{color:'#102054'}}>{props.tags}</Text>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity><Text style={{color:'#102054'}}>
                            + Join {' '}</Text></TouchableOpacity> 
                     <TouchableOpacity><Text><MaterialCommunityIcons name={"share-variant"} color={"#102054"} size={15} />Share </Text></TouchableOpacity>
                    </View>
                    </View>
                    <View>
                        <Image
                            style={{height: 50, width: 51}}
                            source={require('../Images/AchieveIcon.png')}
                        />
                    </View>
              </View>
    )
}
