import React, {useState} from 'react';
import {View, Modal, TouchableOpacity, Text, Touchable} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export default function ModalCheck() {
  const [modal, setModal] = useState(false);
  return (
    <View style={{backgroundColor: 'yellow', height: '100%',opacity:0.3}}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#102054',
          elevation: 3,
          alignSelf: 'center',
          width: '90%',
          //   marginTop: 340,
          height: 80,
          justifyContent: 'center',
        }}
        onPress={() => setModal(true)}>
        <Text style={{fontSize: 20, fontFamily: 'Inter-Bold', color: '#fff'}}>
          Press Me
        </Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={{height: '100%', width: '100%', justifyContent: 'center'}}>
          <View
            style={{
              width: '90%',
              backgroundColor: '#fff',
              alignSelf: 'center',
              borderRadius: 5,
              elevation: 15,
            }}>
            <View style={{alignSelf: 'center'}}>
              <MaterialIcon
                name="error-outline"
                size={60}
                color="red"
                style={{padding: 10}}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 20,
                }}>
                Your all Progress will be lost
              </Text>
            </View>
            <View
              style={{alignSelf: 'center', paddingBottom: 20, paddingTop: 15}}>
              <Text
                style={{
                  color: '#102054',
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 12,
                }}>
                Do you want to Start Over?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 50,
                backgroundColor: '#102054',
                alignItems: 'center',
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <TouchableOpacity
                onPress={()=>setModal(false)}
                style={{
                  backgroundColor: '#102054',
                  height: 35,
                  borderRightWidth: 1,
                  borderColor: 'grey',
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Inter-Bold',
                    color: '#fff',
                    fontSize: 18,
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>setModal(false)}
                style={{
                  backgroundColor: '#102054',
                  width: '50%',
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Inter-Bold',
                    color: '#fff',
                    fontSize: 18,
                  }}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
