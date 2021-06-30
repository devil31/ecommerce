import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onChange, value, onPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        placeholder="cerca qualcosa..."
      />

      <TouchableOpacity onPress={onPress}>
        <Ionicons
          style={styles.iconSearch}
          name="md-search-outline"
          size={24}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 32,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 0,
    padding: 3,
    backgroundColor: "#fff",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",   
  },
  iconSearch: {
    backgroundColor: "deepskyblue",
    color: "white",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderLeftWidth: 0,
    width: "100%",
    height: 32,
    padding: 3,
  },
});
