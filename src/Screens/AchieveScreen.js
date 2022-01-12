import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from '../Components/BottomTab';
import Header from '../Components/Header';
import HeaderDown from '../Components/HeaderSimple';
import HomeCard from '../Components/HomeCards';
const AchieveScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#f1f4fb', '#DBE9F6', '#DBE9F6']}
      style={{height: '100%', width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            height: 30,
            width: 185,
            marginTop: 20,
            marginLeft: 15,
            marginBottom: 10,
          }}
          source={require('../Images/Konsolo.png')}
        />

        <TouchableOpacity
          style={{alignItems: 'center', marginRight: 15, marginTop: 10}}>
          <Feather name={'search'} size={25} color="#102054" />
        </TouchableOpacity>
      </View>

      <BottomTab
        colorhome="#ff4b4d"
        widthhome={2.5}
        colorcollaboration="#102054"
        widthcollaboration={0}
        colorsetting="#102054"
        widthsetting={0}
        colorachievement="#102054"
        widthachievement={0}
        colordrawer="#102054"
        widthdrawer={0}
        pathcollaboration={() => navigation.navigate('COLLABORATION')}
        pathsetting={() => navigation.navigate('SETTING')}
        pathachievement={() => navigation.navigate('ACHIEVEMENT')}
       // pathdrawer = {()=>navigation.navigate("PROFILE")}
      />
      <Header title='Achieve'/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 3,
              width: '40%',
              alignItems: 'center',
              marginTop: 30,
              height: 170,
              justifyContent: 'center',
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 10,
              marginBottom: 15,
            }}>
            <TouchableOpacity>
            <Image
              style={{height: 90, width: 85,alignSelf:'center'}}
              source={require('../Images/GetStarted.png')}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Jost-Bold',
                color: '#102054',
                marginTop: 10,
              }}>
              Get Started
            </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              width: '40%',
              elevation: 3,
              alignItems: 'center',
              marginTop: 30,
              height: 170,
              justifyContent: 'center',
              borderRadius: 10,
              marginLeft: 20,
              marginRight: 10,
            }}>
                <TouchableOpacity>
            <Image
              style={{height: 90, width: 90,alignSelf:'center'}}
              source={require('../Images/ContinueProgress.png')}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Jost-Bold',
                color: '#102054',
                marginTop: 10,
              }}>
              Continue Progress
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default AchieveScreen;
