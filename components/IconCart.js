import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const IconCart = ({onPressCart,numb}) => {
    return (
        <View  style={{display:'flex',flexDirection:'row',marginRight:15}}>
         <View>
         <TouchableOpacity  onPress={onPressCart}  >
            <Ionicons name="cart" size={28} />
        </TouchableOpacity>
         </View>
         <Text style={{fontSize:12,fontWeight:'bold'}}>{numb}</Text>
        </View>
    )
}

export default IconCart