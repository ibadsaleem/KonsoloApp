import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button,TextInput,ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import { FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from '../Components/Card';

const AchieveCollaborationScreen = ({navigation}) => {
    const [TagRefresh, setTagRefresh] = useState(false)
    const [Tag, setTag] = useState('')
    const [AddedTag, setAddedTag] = useState([])
    const AddTag = () => {
        if( (Tag == '') || (Tag == null) ){
          ToastAndroid.showWithGravityAndOffset(
              "Please enter Tag",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              25,
              50
            )
        }
        else{
            AddedTag.push(Tag)
            setTagRefresh(!TagRefresh)
            ToastAndroid.showWithGravityAndOffset(
              "Tag added successfully",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              25,
              50
            )
            setTag('')
        }
    }

    const RemoveTag = (value) => {
        AddedTag.splice(value, 1)
        setTagRefresh(!TagRefresh)
        ToastAndroid.showWithGravityAndOffset(
          "Tag remove successfully",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50,
        )
    }
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
                fontWeight:'bold',
              }}>
              {' '}
              Collaboration{' '}
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
          <Text style={{color: '#102054', fontFamily:'Inter-Bold', width: '90%', alignSelf: 'center', marginTop: 10}}> Tag</Text>
            <View style={{borderWidth: 1, borderColor:'#102054', width:'90%', alignSelf: 'center', borderRadius: 5}}>

            { (AddedTag.length != 0) ? <FlatList
                style={{width: '100%', marginTop:5}}
                extraData={TagRefresh}
                scrollEnabled={true}
                data={AddedTag}
                keyExtractor={id=>id.Tag}
                renderItem={({item, index})=>{
                    return(
                        <View style={{backgroundColor: '#eaeaea', padding: 10, marginLeft: 5, marginRight: 5, marginBottom: 5, justifyContent: 'center', borderRadius: 20}}>
                            <Text style={{color: '#000', fontFamily: 'Inter-SemiBold', width: '85%', paddingLeft: 5}}>{item}</Text>
                            <TouchableOpacity
                            onPress={()=>RemoveTag(index)}
                            style={{position: 'absolute', right: 10}}
                            >
                            <MaterialCommunityIcons name={"close-circle-outline"} color={"#102054"} size={25} />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            /> : null}

            <View>
            <TextInput
            style={{width: '85%', marginLeft: 5, color:'#102054'}}
            placeholder='Type Tag'
            placeholderTextColor={'grey'}
            multiline={true}
            value={Tag}
            onChangeText={(text)=>setTag(text)}
            />

            <TouchableOpacity
            onPress={()=>AddTag()}
            style={{position:'absolute', alignSelf: 'flex-end', marginTop: 12, right: 5}}>
            <MaterialCommunityIcons name={"plus-thick"} color={"#102054"} size={25} />
            </TouchableOpacity>
            </View>
            </View>
            
            <View style={{alignSelf:'center',marginTop:10}}>
            <TouchableOpacity>
                <Feather  name={"search"} size={25} color='#102054' />
            </TouchableOpacity> 
             </View>
            <View style={{alignSelf:'center',marginTop:10}}>
             <Text style={{color:'#102054',fontWeight:'bold',fontSize:20}}>Search Results</Text>
            </View>
            <View>
              <Card title='Self Actualization' members='30' tags='#SelfEsteem#Safety#Belonging'/>
              <Card title='Self Discipline' members='20' tags='#Discipline#Training#Strictness'/>
              <Card title='Self Discipline' members='20' tags='#Discipline#Training#Strictness'/>
              <Card title='No Procrastination' members='15' tags='#Productivity#Motivation#Focus'/>
              <Card title='No Procrastination' members='15' tags='#Productivity#Motivation#Focus'/>
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

export default AchieveCollaborationScreen;
