import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Calendar  from '../Components/Calendar';
import moment from 'moment'
import { Menu, MenuItem } from 'react-native-material-menu';
import ButtonProgrerss from '../Components/ButtonProgress';

export default function AchieveProgressScreen() {
    const [PostPlan, setPostPlan] = useState('')
    const [Privacy, setPrivacy] = useState('Public')
    const [PrivacyIcon, setPrivacyIcon] = useState('globe-outline')
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);  
    const showMenu = () => setVisible(true);
    const [CurrentDate, setCurrentDate] = useState(moment().format('YYYYMMDD'))
    const [Deadline, setDeadline] = useState('Select Deadline')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [FollowUp, setFollowUp] = useState('Select Follow Up')
    const [isFollowUpDatePickerVisible, setFollowUpDatePickerVisibility] = useState(false)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        setDeadline(moment(date).format('DD-MM-YYYY'))
        hideDatePicker();
      };

      const showFollowUpDatePicker = () => {
        setFollowUpDatePickerVisibility(true);
      };
    
      const hideFollowUpDatePicker = () => {
        setFollowUpDatePickerVisibility(false);
      };
    
      const FollowUphandleConfirm = (date) => {
        setFollowUp(moment(date).format('DD-MM-YYYY'))
        hideFollowUpDatePicker();
      };
  return (
    <LinearGradient
      colors={['#f1f4fb', '#DBE9F6', '#DBE9F6']}
      style={{height: '100%', width: '100%'}}>
     
      <Header title="Achieve" />
      <ScrollView style={{
            backgroundColor: '#fff',
            height: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 1,
            marginTop:30,
          }} showsVerticalScrollIndicator={false}>

            <Main title='Progress'/>
            <View style={{marginTop:20}}>
                <Text style={{color:'#102054',fontSize:20,fontWeight:'bold',textAlign:'center'}}>Daily Login</Text>
            </View>
            
            
            
            
            
            {/* Calendar Here */}





<Calendar/>















            <View>
            <Text style={{color: '#102054', fontFamily:'Inter-Bold', width: '90%', alignSelf: 'center', marginTop: 15}}>Post</Text>
            <View style={{borderWidth: 1, borderColor:'#102054', width:'90%', alignSelf: 'center', borderRadius: 5}}>

            <TextInput
            style={{width: '67%', marginLeft: 5, color:'#102054'}}
            placeholder='Post your plans here'
            placeholderTextColor={'grey'}
            multiline={true}
            value={PostPlan}
            onChangeText={(text)=>setPostPlan(text)}
            />

            <TouchableOpacity 
            onPress={showMenu}
            style={{position:'absolute', alignSelf: 'flex-end', borderRadius: 5, borderColor:'grey', borderWidth: 1, marginTop: 10, right: 10, height: 30, width: 85, alignItems: 'center', justifyContent: 'center'}}>
            <Menu
                visible={visible}
                anchor={
               <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection:'row', width: 85, height: 30}}>
                <Ionicons name={PrivacyIcon} size={15} color='grey' style={{left: 2, marginLeft:2}} />
                <Text style={{color: 'grey', fontSize: 12, fontFamily: 'Inter-SemiBold', paddingLeft: 5, paddingRight: 5}}>{Privacy}</Text>
                <Feather name={"chevron-down"} size={15} color='grey' style={{right: 2, top: 1, marginRight: 2}} />
               </View>
                }
                onRequestClose={hideMenu}
            >
                <MenuItem onPress={()=>{
                    hideMenu()
                    setPrivacy('Private')
                    setPrivacyIcon('lock-closed')
                    }}
                    textStyle={{color: 'grey'}}
                    >Private</MenuItem>
                <MenuItem onPress={()=>{
                    hideMenu()
                    setPrivacy('Public')
                    setPrivacyIcon('globe-outline')
                    }}
                    textStyle={{color: 'grey'}}
                    >Public</MenuItem>
                <MenuItem onPress={()=>{
                    hideMenu()
                    setPrivacy('Support..')
                    setPrivacyIcon('people-circle-sharp')
                    }}
                    textStyle={{color: 'grey'}}
                    >Support Cricle</MenuItem>
                <MenuItem onPress={()=>{
                    hideMenu()
                    setPrivacy('Friends')
                    setPrivacyIcon('people')
                    }}
                    textStyle={{color: 'grey'}}
                    >Friends</MenuItem>
            </Menu>
            </TouchableOpacity>

            <TouchableOpacity
              style={{alignSelf: 'flex-end', margin: 10}}
            >
              <MaterialCommunityIcons  name={"send-circle"} size={30} color='#102054' />
              </TouchableOpacity>
            <TouchableOpacity style={{borderTopWidth: 1, borderColor:'#102054', flexDirection: 'row', alignItems: 'center'}}>
                <Feather name={'image'} size={20} color='#102054' style={{marginLeft: 10, marginBottom: 10, marginTop: 10}} />
                <Text style={{color: '#102054', fontFamily:'Inter-Medium', paddingLeft: 3}}>Photos/Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderTopWidth: 1, borderColor:'#102054', flexDirection: 'row', alignItems: 'center'}}>
                <Feather name={'user-plus'} size={20} color='#102054' style={{marginLeft: 10, marginBottom: 10, marginTop: 10}} />
                <Text style={{color: '#102054', fontFamily:'Inter-Medium', paddingLeft: 3}}>Tag</Text>
            </TouchableOpacity>
            </View>
            </View>
            <ButtonProgrerss icon='file-document-outline' title='My Journal'/>
            <ButtonProgrerss icon='history' title='Iterations'/>
            <ButtonProgrerss icon='crosshairs-gps' title='Deep Work Mode'/>
            <ButtonProgrerss icon='crosshairs-gps' title='Daily Productivity'/>
            <ButtonProgrerss icon='fire' title='Pause Streak'/>
            <ButtonProgrerss icon='fire' title='Start Over'/>
            <ButtonProgrerss icon='history' title='Connect with a Life Coach'/>
            <ButtonProgrerss icon='account-tie-voice' title='Talk to an Expert'/>
    </ScrollView>
    <TouchableOpacity>
      <View style={{backgroundColor:'#102054',height:50}}>
          <Text style={{alignSelf:'center',fontSize:20,color:'#fff',marginTop:10}} >DONE</Text>
      </View>
  </TouchableOpacity>
















    </LinearGradient>
  );
}
