import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ResultSearch = ({ title, image, price, quantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Image style={styles.image} source={{ uri: image }} />

      <Text>{price}€</Text>
    </View>
  );
};

export default ResultSearch;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,  
    padding:8,
    
  
  },
  image: {
    width: 140,
    height: 130,
    resizeMode: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  title:{
    fontWeight: '700',
    marginBottom:10,
  }
});
