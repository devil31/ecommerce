import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text,StyleSheet,TouchableOpacity,ScrollView} from "react-native";
import ResultSearch from "../components/ResultSearch";
import axios from "axios";

const ProductSearch = ({ route,navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { text } = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const myData = await axios.get(
        `https://ecommerce-dc417-default-rtdb.europe-west1.firebasedatabase.app/prodotti/elettronica/.json`
      );
      const itemList = [];
      for (let key in myData.data) {
        itemList.push({
          title: myData.data[key].title,
          image: myData.data[key].image,
          id: myData.data[key].id,
          price: myData.data[key].price,
          description:myData.data[key].description,
          quantity:myData.data[key].quantity,
        });
      }
      setData(itemList.filter(word=>word.title==`${text}`.trim()));
      setLoading(false);
            
    } catch (error) {
  
      setError(true);
    }
  };



  const rendereElement = () => {
    return data.map((item) => {
      return (
        <TouchableOpacity  key={item.id} onPress={()=>navigation.navigate('DetailProduct',{
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            description:item.description,
            quantity: item.quantity,
        })}>
            <ResultSearch
          title={item.title}
         
          image={item.image}
          price={item.price}
          quantity={item.quantity}
        />
        </TouchableOpacity>
      
      );
    });
  };

  return (
    <View style={styles.container}>
      {loading === true ? <ActivityIndicator color='red' size='large'/> : <ScrollView contentContainerStyle={styles.scroll} >{rendereElement()}</ScrollView> }
      {error === true ? <Text style={styles.error}>Something Wrong</Text> :null }
      {data == '' ?<Text>not found</Text>:null}
    
    </View>
  );
};

export default ProductSearch;

const styles = StyleSheet.create({
  container:{
    display: 'flex',   
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  error:{
    fontWeight: 'bold',
    color:'red'
  },
  scroll:{
    display: 'flex',
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginRight: 10,
    marginLeft: 10,
    

  }
 
})