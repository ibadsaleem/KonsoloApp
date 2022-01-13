import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button,TextInput,ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TodoList from '../Components/TodoList';
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
             Daily Productivity{' '}
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
                fontFamily: 'Inter-SemiBold',
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
    <View style={{}}>
             <View style={{alignItems:'center',borderWidth:2.5,padding:10,borderColor:'#102054',width:90,borderRadius:5,height:90,justifyContent:'center'}}>
                 <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'black'}}>25</Text>
                 </View>
                 <View>
                 <View style={{}}><Text style={{color:'#102054',fontFamily:'Inter-Bold',textAlign:'center'}}>min</Text></View>
                 </View>
                 </View>
         
             <View style={{alignItems:'center',width:60,height:100,justifyContent:'center'}}>
             <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'#102054'}}>:</Text>
                 </View>
            <View>

             <View style={{alignItems:'center',borderWidth:2.5,padding:10,borderColor:'#102054',width:90,borderRadius:5,height:90,justifyContent:'center'}}>
                 <Text style={{fontSize:30,fontFamily:'Inter-Bold',color:'black'}}>00</Text>
             </View>
         <View style={{}}><Text style={{color:'#102054',fontFamily:'Inter-Bold',textAlign:'center'}}>sec</Text></View>
            </View>
             
         </View>
         {/* <View style={{flexDirection:'row',justifyContent:'space-around'}}>    
                 <View style={{width:40,marginLeft:29}}><Text style={{color:'#102054',fontFamily:'Inter-Bold',textAlign:'center'}}>min</Text></View>
                 <View style={{width:40,marginRight:28}}><Text style={{color:'#102054',fontFamily:'Inter-Bold',textAlign:'center'}}>sec</Text></View>
         </View> */}
         <View style={{flexDirection:'row',justifyContent:'center',marginTop:50,width:'100%'}}>    
                 <TouchableOpacity style={{marginLeft:30}}>

                 <View style={{backgroundColor:'#102054',width:50,height:50,borderRadius:25,alignItems:'center',justifyContent:'center',marginRight:20}}>
                 <Fontisto
                    name="spinner-rotate-forward"
                    color="#fff"
                    size={25} 
                 />
           </View>
                 </TouchableOpacity>
               
                
         </View>
         <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:40,marginLeft:9}}>    
                 
         
                 <View style={{alignItems:'center',justifyContent:'center',marginRight:16,position:'absolute'}}>
                 <Text style={{color:'#102054',fontFamily:'Inter-SemiBold'}}>Reset Time</Text>

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
                fontFamily: 'Inter-SemiBold',
                color: '#102054',
                fontSize: 20,
              }}>
              {'     '}
             Task Tracker{'      '}
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
         <View style={{flexDirection:'row',width:'95%',justifyContent:'space-between',alignSelf:'center',borderBottomWidth:1,borderBottomColor:'lightgrey',paddingBottom:20}}>              
         <View><Text style={{fontSize:22,fontFamily:'Inter-Bold',color:'#102054'}}>To Do</Text>
         
         <View style={{width:50,marginLeft:3}}>
         <View style={{borderBottomColor:'#102054',borderBottomWidth:3,width:43,borderRadius:2}}></View>              
         <View style={{borderBottomWidth:3,width:3,borderRadius:10,position:'absolute',alignSelf:'flex-end'}}></View>              
         
         </View>
         </View>
                       
                       
         <TouchableOpacity style={{backgroundColor:'#102054',width:50,height:50,borderRadius:25,alignItems:'center',justifyContent:'center',marginRight:20}}>
                 <Feather
                    name="plus-circle"
                    color="#fff"
                    size={25} 
                 />
           </TouchableOpacity>              
         </View>
                <TodoList time='10:00' title='Daily Exercise' duration='10:00 - 11:00'/>
                <TodoList time='11:00' title='Daily Walk' duration='11:00 - 12:00'/>
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
