import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from '../Components/BottomTab';
import HeaderDown from '../Components/HeaderSimple';
import HomeCard from '../Components/HomeCards';
const HomeScreen = ({navigation}) => {
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
      <HeaderDown />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 2,
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
              style={{height: 80, width: 80}}
              source={require('../Images/AchieveIcon.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Jost-Bold',
                color: '#102054',
                marginTop: 10,
              }}>
              Achieve
            </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              width: '40%',
              elevation: 2,
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
              style={{height: 80, width: 80}}
              source={require('../Images/Overcome.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Jost-Bold',
                color: '#102054',
                marginTop: 10,
              }}>
              Overcome
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 2,
              width: '40%',
              alignItems: 'center',
              marginTop: 10,
              height: 170,
              justifyContent: 'center',
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 10,
              marginBottom: 15,
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 80, width: 80}}
                source={require('../Images/Learn.png')}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Jost-Bold',
                  color: '#102054',
                  marginTop: 10,
                }}>
                Learn
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              width: '40%',
              elevation: 2,
              alignItems: 'center',
              marginTop: 10,
              height: 170,
              justifyContent: 'center',
              borderRadius: 10,
              marginLeft: 20,
              marginRight: 10,
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 80, width: 60}}
                source={require('../Images/Change.png')}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Jost-Bold',
                  color: '#102054',
                  marginTop: 10,
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom:10}}>
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
          <HomeCard title='Achieved Top Grades' descr='I made friends in my support circle to help me practice improving my self confidence' time='3 Days ago' />
        </View>
        
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
