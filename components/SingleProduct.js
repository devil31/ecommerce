import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image, 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SingleProduct = ({ title, add, less, qnt, image, description }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>

      <Image style={styles.img} source={{ uri: image }} />

      <View style={styles.container_qnt}>
        <TouchableOpacity onPress={less}>
          <Ionicons name="remove-circle" size={30} />
        </TouchableOpacity>
        <Text style={styles.num_qnt}>{qnt}</Text>
        <TouchableOpacity onPress={add}>
          <Ionicons name="ios-add-circle" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: "50%",
    height: "50%",
    resizeMode: "center",
  },
  container_qnt: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  num_qnt: {
    marginLeft: 30,
    marginRight: 30,
  },
  description: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
  },
});
