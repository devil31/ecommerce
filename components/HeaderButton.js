import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const HeaderButton = ({onPressLeft}) => {
    return (
       <Ionicons style={{marginLeft:10}} name="md-menu" size={32} onPress={onPressLeft}/>
    )
}

export default HeaderButton
