import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Products = ({ title, image, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={{ uri: image }} />
      <Text style={styles.price}>{price}€</Text>
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    marginTop: 10,
    marginBottom: 2,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3.25,
shadowRadius: 3.84,
    elevation:0.8, 
  },
  img: {
    width: 140,
    height: 130,
    resizeMode: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: "700",  
    fontFamily: 'sans-serif',
 
  },
  price: {
    fontWeight: "600",
  },
});
