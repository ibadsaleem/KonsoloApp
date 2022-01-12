import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const BottomTab = ({ pathhome, pathcollaboration, pathsetting, pathachievement, pathdrawer, colorcollaboration, colorsetting, colorachievement, colordrawer, colorhome, widthhome, widthcollaboration, widthsetting, widthachievement, widthdrawer, }) => {
    return(
        <View style={{width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            
            <TouchableOpacity
            onPress= {pathhome}
            style={{alignItems: 'center', borderColor: '#ff4b4d', borderBottomWidth: widthhome, width: 50}}
            >
                <Feather  name={"home"} size={25} color={colorhome} style={{margin: 5}} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress= {pathcollaboration}
            style={{alignItems: 'center', borderColor: '#ff4b4d', borderBottomWidth: widthcollaboration, width: 50}}
            >
                <Feather  name={"user"} size={25} color={colorcollaboration} style={{margin: 5}} />
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress= {pathsetting}
            style={{alignItems: 'center', borderColor: '#ff4b4d', borderBottomWidth: widthsetting, width: 50}}
            >
                <Feather name={"settings"} size={25} color={colorsetting} style={{margin: 5}} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={pathachievement}
            style={{alignItems: 'center', borderColor: '#ff4b4d', borderBottomWidth: widthachievement, width: 50}}
            >
                <Feather name={"award"} size={25} color={colorachievement} style={{margin: 5}} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={pathdrawer}
            style={{alignItems: 'center', borderColor: '#ff4b4d', borderBottomWidth: widthdrawer, width: 50}}
            >
                <Feather name={"menu"} size={25} color={colordrawer} style={{margin: 5, top: 3}}/>
            </TouchableOpacity>

        </View>
    )
}

export default BottomTab;