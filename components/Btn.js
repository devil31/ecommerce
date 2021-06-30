import React from 'react'
import { Text,TouchableOpacity,StyleSheet} from 'react-native'

const Button = ({txt,onPress,back}) => {
    return (
   <TouchableOpacity style={styles.btn} onPress={onPress} >
       <Text style={styles.txt}>{txt}</Text>
   </TouchableOpacity>
    )
}

export default Button
const styles = StyleSheet.create({
    btn:{
          display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff9933",
    borderRadius: 5,
    
    height: 35,
    marginTop: 20,
    paddingHorizontal: 10,
    
    },
    txt:{
        color:'#fff'
    }
  
})
