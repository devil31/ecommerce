import React, { useEffect } from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchItem } from "../store/actions/Item";
import Products from "../components/Products";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state.ItemReducer);
  const renderProducts = state.Items.map((item) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() =>
          navigation.navigate("DetailProduct", {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            description:item.description,
            quantity: item.quantity,
          })
        }
      >
        <Products
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
        />
      </TouchableOpacity>
    );
  });

  useEffect(() => {
    dispatch(fetchItem());
  }, []);

  const dispatch = useDispatch();

  return (
  
    <ScrollView contentContainerStyle = {styles.container}>
    {renderProducts}
    </ScrollView> 
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",   
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    
    },
});
