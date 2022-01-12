import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button,TextInput,ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import { FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from '../Components/Card';
import HomeCard from '../Components/HomeCards';
const AchieveDeepWorkMode = ({navigation}) => {
 
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
                borderBottomWidth: 1,
                borderColor: 'lightgrey',
                width: '25%',
                top: 1,
              }}
            />
            <Text
              style={{
                fontFamily: 'Jost-Bold',
                color: '#102054',
                fontSize: 22,
              }}>
              {' '}
             Deep Work Mode{' '}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: 'lightgrey',
                width: '25%',
                top: 1,
              }}
            />
          </View>
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
                width: '25%',
                top: 1,
              }}
            />
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: '#102054',
                fontSize: 20,
              }}>
              {'     '}
             Work Timer{'      '}
            </Text>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#102054',
                width: '25%',
                top: 1,
              }}
            />
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
             {/* Work Timer */}
             <View style={{alignItems:'center',borderWidth:2.5,borderColor:'#102054',width:'23%',borderRadius:5,height:100,justifyContent:'center'}}>
                 <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'black'}}>25</Text>
                 </View>
             <View style={{alignItems:'center',width:'23%',height:100,justifyContent:'center'}}>
             <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'#102054'}}>:</Text>
                 </View>
             <View style={{alignItems:'center',borderWidth:2.5,borderColor:'#102054',width:'23%',borderRadius:5,height:100,justifyContent:'center'}}>
                 <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'black'}}>00</Text>
                 </View>
             
         </View>
         <View style={{flexDirection:'row',justifyContent:'center'}}>    
                 <View style={{position:'absolute',left:91}}><Text style={{color:'#102054',fontFamily:'Inter-Bold'}}>min</Text></View>
                 <View style={{position:'absolute',right:91}}><Text style={{color:'#102054',fontFamily:'Inter-Bold'}}>sec</Text></View>
         </View>
         <View style={{flexDirection:'row',justifyContent:'center',marginTop:50,width:'100%'}}>    
                 <TouchableOpacity style={{marginLeft:30}}>

                 <View style={{backgroundColor:'#102054',width:50,height:50,borderRadius:25,alignItems:'center',justifyContent:'center',marginRight:20}}>
                 <Feather  name={"play"} size={25} color='#fff' />
                 </View>
                 </TouchableOpacity>
                 <TouchableOpacity>

                 <View style={{backgroundColor:'#102054',width:50,height:50,borderRadius:25,alignItems:'center',justifyContent:'center',marginRight:20}}>
                 <Feather  name={"square"} size={25} color='#fff' />
                 </View>
                 </TouchableOpacity>

                 <TouchableOpacity>

                 <View style={{backgroundColor:'#102054',width:50,height:50,borderRadius:25,alignItems:'center',justifyContent:'center',marginRight:20}}>
                 <Feather  name={"edit"} size={25} color='#fff' />
                 </View>
                 </TouchableOpacity>
         
                
         </View>
         <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:40,marginLeft:9}}>    
                 <View style={{alignItems:'center',justifyContent:'center',position:'absolute',left:106}}>
                    <Text style={{color:'#102054',fontFamily:'Inter-Bold'}}>Start</Text>
                 </View>
         
                 <View style={{alignItems:'center',justifyContent:'center',marginRight:16,position:'absolute'}}>
                 <Text style={{color:'#102054',fontFamily:'Inter-Bold'}}>Stop</Text>

                 </View>
                 <View style={{alignItems:'center',justifyContent:'center',position:'absolute',left:255}}>
                 <Text style={{color:'#102054',fontFamily:'Inter-Bold'}}>Set</Text>

                 </View>
         </View>




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
                width: '25%',
                top: 1,
              }}
            />
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: '#102054',
                fontSize: 20,
              }}>
              {'     '}
             Break Timer{'      '}
            </Text>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#102054',
                width: '25%',
                top: 1,
              }}
            />
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
             {/* Work Timer */}
             <View style={{alignItems:'center',borderWidth:2.5,borderColor:'#102054',width:'23%',borderRadius:5,height:100,justifyContent:'center'}}>
                 <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'black'}}>05</Text>
                 </View>
             <View style={{alignItems:'center',width:'23%',height:100,justifyContent:'center'}}>
                 <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'#102054'}}>:</Text>
                 </View>
             <View style={{alignItems:'center',borderWidth:2.5,borderColor:'#102054',width:'23%',borderRadius:5,height:100,justifyContent:'center'}}>
                 <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'black'}}>00</Text>
                 </View>
             
         </View>
             
         <View style={{flexDirection:'row',justifyContent:'center'}}>    
                 <View style={{position:'absolute',left:91}}><Text style={{color:'#102054',fontFamily:'Inter-Bold'}}>min</Text></View>
                 <View style={{marginLeft:185}}><Text style={{color:'#102054',fontFamily:'Inter-Bold'}}>sec</Text></View>
         </View>
         
    </ScrollView>
  <TouchableOpacity>
      <View style={{backgroundColor:'#102054',height:50}}>
          <Text style={{alignSelf:'center',fontSize:20,color:'#fff',marginTop:10,fontFamily:'Inter-Bold'}} >Done</Text>
      </View>
  </TouchableOpacity>
 </LinearGradient>
  );
};

export default AchieveDeepWorkMode;
