import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ItemCart = ({ remove, title, image, add, less, quantity, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.txt_title}>
        <Text style={{ marginBottom: 15,color:'black',  fontWeight: '700',}}>{title}</Text>
        <Image style={styles.img} source={{ uri: image }} />
      </View>

 <View style={{alignSelf:'center', flexDirection:'column',marginRight:20}}>
    <View style={styles.quantity}>
        <TouchableOpacity onPress={less}>
          <Ionicons name="remove-circle" size={23} />
        </TouchableOpacity>

        <Text style={styles.tot}>{quantity}</Text>

        <TouchableOpacity onPress={add}>
          <Ionicons name="ios-add-circle" size={23} />
        </TouchableOpacity>
      </View>
 <Text>prezzo: {(price * quantity).toFixed(2)}€</Text>
      

 </View>
     
<TouchableOpacity  onPress={remove}>
        <Ionicons name="trash" size={21} />
      </TouchableOpacity>
     
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,    
    
  },
  img: {
    marginRight: '15 %',
    width: 100,
    height: 100,
    resizeMode:'center',
  },
  quantity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop:12,
    marginBottom:5,
  },
  tot: {
    marginLeft: 20,
    marginRight: 20,
  },
  txt_title: {
    alignSelf: "center",
    marginHorizontal: 20,

    
  },
});
