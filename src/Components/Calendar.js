import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment'

export default function Calendar(props) {
      const onPressFunc=()=>{
      setDateSelected(2) 
    }
    let customDatesStyles = [];
    let startDate = moment();
    let count=0;
      customDatesStyles.push({
          startDate: startDate.clone().add(0, 'days'), // Single date since no endDate provided
          dateNameStyle: styles.dateNameStyle,
          dateNumberStyle: styles.dateNumberStyle,
          // Random color...
          dateContainerStyle: styles.containerDate,
        })
      
    
  return (
         <View style={styles.container}>
      <CalendarStrip 
    //   daySelectionAnimation={{type:'border',borderWidth:1}}
    maxDate={moment().format()}  
    iconRight={false}
      iconLeft={false}
      customDatesStyles={customDatesStyles}
      scrollable 
      style={{height: 150, paddingTop: 20, paddingBottom: 10}} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  containerDate:{
      borderWidth:2,
      borderColor:'green',
      borderRadius:5,
      
  },
  containerDate2:{
      borderWidth:2,
      borderColor:'red',
      borderRadius:5,
      
  },
  
});
