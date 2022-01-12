import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Components/Header';
import {FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../Components/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {Menu, MenuItem} from 'react-native-material-menu';
import HomeCard from '../Components/HomeCards';
const AchieveProgressIteration = ({navigation}) => {
  const [PostPlan, setPostPlan] = useState('');
  const [Privacy, setPrivacy] = useState('Public');
  const [Privacy1, setPrivacy1] = useState('Public');
  const [Privacy2, setPrivacy2] = useState('Public');
  const [PrivacyIcon, setPrivacyIcon] = useState('globe-outline');
  const [PrivacyIcon1, setPrivacyIcon1] = useState('globe-outline');
  const [PrivacyIcon2, setPrivacyIcon2] = useState('globe-outline');
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const hideMenu1 = () => setVisible1(false);
  const showMenu1 = () => setVisible1(true);
  const hideMenu2 = () => setVisible2(false);
  const showMenu2 = () => setVisible2(true);
  const [CurrentDate, setCurrentDate] = useState(moment().format('YYYYMMDD'));
  const [Deadline, setDeadline] = useState('Select Deadline');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [FollowUp, setFollowUp] = useState('Select Follow Up');
  const [isFollowUpDatePickerVisible, setFollowUpDatePickerVisibility] =
    useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDeadline(moment(date).format('DD-MM-YYYY'));
    hideDatePicker();
  };

  const showFollowUpDatePicker = () => {
    setFollowUpDatePickerVisibility(true);
  };

  const hideFollowUpDatePicker = () => {
    setFollowUpDatePickerVisibility(false);
  };

  const FollowUphandleConfirm = date => {
    setFollowUp(moment(date).format('DD-MM-YYYY'));
    hideFollowUpDatePicker();
  };
  return (
    <LinearGradient
      colors={['#f1f4fb', '#DBE9F6', '#DBE9F6']}
      style={{height: '100%', width: '100%'}}>
      <Header title="Achieve" />

      <ScrollView
        style={{
          backgroundColor: '#fff',
          height: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 1,
          marginTop: 30,
        }}
        showsVerticalScrollIndicator={false}>
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
              fontWeight: 'bold',
            }}>
            {' '}
            Iterations{' '}
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
        <View>
          <Text
            style={{
              color: '#102054',
              fontFamily: 'Inter-Bold',
              width: '90%',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            Challenge
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#102054',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              style={{width: '67%', marginLeft: 5, color: '#102054'}}
              placeholder="Enter Text Here"
              placeholderTextColor={'grey'}
              multiline={true}
              value={PostPlan}
              onChangeText={text => setPostPlan(text)}
            />

        <View style={{position:'absolute',right:100,top:9}}>
            <TouchableOpacity>
        <MaterialCommunityIcons name={"plus-thick"} color={"#102054"} size={25} style={{paddingTop:2}} />
            </TouchableOpacity>
        </View> 
            <TouchableOpacity
              onPress={showMenu}
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                borderRadius: 5,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 10,
                right: 10,
                height: 30,
                width: 85,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                      
                  
              <Menu
                visible={visible}
                anchor={
                    <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      width: 85,
                      height: 30,
                    }}>
                    <Ionicons
                      name={PrivacyIcon}
                      size={15}
                      color="grey"
                      style={{left: 2, marginLeft: 2}}
                    />
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 12,
                        fontFamily: 'Inter-SemiBold',
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}>
                      {Privacy}
                    </Text>
                    <Feather
                      name={'chevron-down'}
                      size={15}
                      color="grey"
                      style={{right: 2, top: 1, marginRight: 2}}
                    />
                  </View>
                }
                onRequestClose={hideMenu}>
                <MenuItem
                  onPress={() => {
                    hideMenu();
                    setPrivacy('Private');
                    setPrivacyIcon('lock-closed');
                  }}
                  textStyle={{color: 'grey'}}>
                  Private
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu();
                    setPrivacy('Public');
                    setPrivacyIcon('globe-outline');
                  }}
                  textStyle={{color: 'grey'}}>
                  Public
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu();
                    setPrivacy('Support..');
                    setPrivacyIcon('people-circle-sharp');
                  }}
                  textStyle={{color: 'grey'}}>
                  Support Cricle
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu();
                    setPrivacy('Friends');
                    setPrivacyIcon('people');
                  }}
                  textStyle={{color: 'grey'}}>
                  Friends
                </MenuItem>
              </Menu>
              
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: 'flex-end', margin: 10}}>
              <MaterialCommunityIcons
                name={'send-circle'}
                size={30}
                color="#102054"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderColor: '#102054',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Feather
                name={'image'}
                size={20}
                color="#102054"
                style={{marginLeft: 10, marginBottom: 10, marginTop: 10}}
              />
              <Text
                style={{
                  color: '#102054',
                  fontFamily: 'Inter-Medium',
                  paddingLeft: 3,
                }}>
                Photos/Videos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderColor: '#102054',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Feather
                name={'user-plus'}
                size={20}
                color="#102054"
                style={{marginLeft: 10, marginBottom: 10, marginTop: 10}}
              />
              <Text
                style={{
                  color: '#102054',
                  fontFamily: 'Inter-Medium',
                  paddingLeft: 3,
                }}>
                Tag
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            alignSelf: 'center',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{
              width: '43%',
              backgroundColor: '#102054',
              height: 35,
              justifyContent: 'center',
              borderRadius:5
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Inter-Bold',
              }}>
              Accepted
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '43%',
              backgroundColor: '#102054',
              height: 35,
              justifyContent: 'center',
              borderRadius:5
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Inter-Bold',
              }}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        {/* View 2 */}
        
        <View>
          <Text
            style={{
              color: '#102054',
              fontFamily: 'Inter-Bold',
              width: '90%',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            Actions
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#102054',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              style={{width: '67%', marginLeft: 5, color: '#102054'}}
              placeholder="Enter Text Here"
              placeholderTextColor={'grey'}
              multiline={true}
              value={PostPlan}
              onChangeText={text => setPostPlan(text)}
            />

            <TouchableOpacity
              onPress={showMenu1}
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                borderRadius: 5,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 10,
                right: 10,
                height: 30,
                width: 85,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Menu
                visible={visible1}
                anchor={
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      width: 85,
                      height: 30,
                    }}>
                    <Ionicons
                      name={PrivacyIcon1}
                      size={15}
                      color="grey"
                      style={{left: 2, marginLeft: 2}}
                    />
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 12,
                        fontFamily: 'Inter-SemiBold',
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}>
                      {Privacy1}
                    </Text>
                    <Feather
                      name={'chevron-down'}
                      size={15}
                      color="grey"
                      style={{right: 2, top: 1, marginRight: 2}}
                    />
                  </View>
                }
                onRequestClose={hideMenu1}>
                <MenuItem
                  onPress={() => {
                    hideMenu1();
                    setPrivacy1('Private');
                    setPrivacyIcon1('lock-closed');
                  }}
                  textStyle={{color: 'grey'}}>
                  Private
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu1();
                    setPrivacy1('Public');
                    setPrivacyIcon1('globe-outline');
                  }}
                  textStyle={{color: 'grey'}}>
                  Public
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu1();
                    setPrivacy1('Support..');
                    setPrivacyIcon1('people-circle-sharp');
                  }}
                  textStyle={{color: 'grey'}}>
                  Support Cricle
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu1();
                    setPrivacy1('Friends');
                    setPrivacyIcon1('people');
                  }}
                  textStyle={{color: 'grey'}}>
                  Friends
                </MenuItem>
              </Menu>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: 'flex-end', margin: 10}}>
              <MaterialCommunityIcons
                name={'send-circle'}
                size={30}
                color="#102054"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderColor: '#102054',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Feather
                name={'image'}
                size={20}
                color="#102054"
                style={{marginLeft: 10, marginBottom: 10, marginTop: 10}}
              />
              <Text
                style={{
                  color: '#102054',
                  fontFamily: 'Inter-Medium',
                  paddingLeft: 3,
                }}>
                Photos/Videos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderColor: '#102054',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Feather
                name={'user-plus'}
                size={20}
                color="#102054"
                style={{marginLeft: 10, marginBottom: 10, marginTop: 10}}
              />
              <Text
                style={{
                  color: '#102054',
                  fontFamily: 'Inter-Medium',
                  paddingLeft: 3,
                }}>
                Tag
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom:20}}>
          <Text
            style={{
              color: '#102054',
              fontFamily: 'Inter-Bold',
              width: '90%',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            Results
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#102054',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              style={{width: '67%', marginLeft: 5, color: '#102054'}}
              placeholder="Enter Text Here"
              placeholderTextColor={'grey'}
              multiline={true}
              value={PostPlan}
              onChangeText={text => setPostPlan(text)}
            />

            <TouchableOpacity
              onPress={showMenu2}
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                borderRadius: 5,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 10,
                right: 10,
                height: 30,
                width: 85,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Menu
                visible={visible2}
                anchor={
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      width: 85,
                      height: 30,
                    }}>
                    <Ionicons
                      name={PrivacyIcon2}
                      size={15}
                      color="grey"
                      style={{left: 2, marginLeft: 2}}
                    />
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 12,
                        fontFamily: 'Inter-SemiBold',
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}>
                      {Privacy2}
                    </Text>
                    <Feather
                      name={'chevron-down'}
                      size={15}
                      color="grey"
                      style={{right: 2, top: 1, marginRight: 2}}
                    />
                  </View>
                }
                onRequestClose={hideMenu2}>
                <MenuItem
                  onPress={() => {
                    hideMenu2();
                    setPrivacy('Private');
                    setPrivacyIcon('lock-closed');
                  }}
                  textStyle={{color: 'grey'}}>
                  Private
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu2();
                    setPrivacy2('Public');
                    setPrivacyIcon2('globe-outline');
                  }}
                  textStyle={{color: 'grey'}}>
                  Public
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu2();
                    setPrivacy2('Support..');
                    setPrivacyIcon2('people-circle-sharp');
                  }}
                  textStyle={{color: 'grey'}}>
                  Support Cricle
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    hideMenu2();
                    setPrivacy2('Friends');
                    setPrivacyIcon2('people');
                  }}
                  textStyle={{color: 'grey'}}>
                  Friends
                </MenuItem>
              </Menu>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: 'flex-end', margin: 10}}>
              <MaterialCommunityIcons
                name={'send-circle'}
                size={30}
                color="#102054"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderColor: '#102054',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Feather
                name={'image'}
                size={20}
                color="#102054"
                style={{marginLeft: 10, marginBottom: 10, marginTop: 10}}
              />
              <Text
                style={{
                  color: '#102054',
                  fontFamily: 'Inter-Medium',
                  paddingLeft: 3,
                }}>
                Photos/Videos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderColor: '#102054',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Feather
                name={'user-plus'}
                size={20}
                color="#102054"
                style={{marginLeft: 10, marginBottom: 10, marginTop: 10}}
              />
              <Text
                style={{
                  color: '#102054',
                  fontFamily: 'Inter-Medium',
                  paddingLeft: 3,
                }}>
                Tag
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={{backgroundColor: '#102054', height: 50}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: '#fff',
              marginTop: 10,
            }}>
            DONE
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AchieveProgressIteration;
