import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import ItemCart from "../components/ItemCart";
import { fetchCart, removeCart, updateCart } from "../store/actions/Cart";
import Btn from '../components/Btn'

const Cart = ({ navigation }) => {
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  const state = useSelector((state) => state.CartReducer);
  const a = state.Cart.map((obj) => {
    return obj.quantity;
  });
  const Qnt = a[0];

  const [qnt, setQnt] = useState(Qnt);
  const dispatch = useDispatch();

  const remove = (cartKey) => {
    dispatch(removeCart(cartKey));
  };


  const add = (id, title, image, price, quantity, singleKey) => {
        dispatch(fetchCart());
    setQnt(Qnt + 1); 
    quantity=qnt;
    dispatch(updateCart(id, title, image, price, quantity, singleKey));

  };

  const less = (id, title, image, price, quantity, singleKey) => {
    setQnt(Qnt - 1);
    quantity = qnt;
    dispatch(fetchCart());
    dispatch(updateCart(id, title, image, price, quantity, singleKey));
    if (qnt < 1) {
      dispatch(removeCart(singleKey));
    }
  };

  const renderCart = () => {
    return state.Cart.map((cart) => {
      return (
        <ItemCart
          key={cart.id}
          title={cart.title}
          image={cart.image}
          price={cart.price}
          quantity={cart.quantity}
          add={() =>
            add(
              cart.id,
              cart.title,
              cart.image,
              cart.price,
              cart.quantity,
              cart.key
            )
          }
          less={() =>
            less(
              cart.id,
              cart.title,
              cart.image,
              cart.price,
              cart.quantity,
              cart.key
            )
          }
          remove={() => remove(cart.key)}
        />
      );
    });
  };

  const totaProductsValue = state.Cart.map(
    (item) => item.price * item.quantity
  );
  var sum = totaProductsValue.reduce(function (a, b) {
    return a + b;
  }, 0);

  const checkCart = () => {
    alert("Transazione avvenuta con successo");
  };

  const sped = sum > 30 ? 0 : 5.99;

  if (sum > 0) {
    return (
      <ScrollView style={{ display: "flex", backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.render}>{renderCart()}</View>
          <View style={styles.total}>
            <View style={styles.total_price}>
              <Text>Costo articoli: {sum.toFixed(2)}€</Text>
              {sum > 30 ? (
                <Text>Spedizione 0.00</Text>
              ) : (
                <Text>spedizione: {sped}</Text>
              )}
              <Text>Totale dell'ordine: {(sped + sum).toFixed(2)}</Text>
            </View>          
           <Btn txt={'Vai al Check Out'} onPress={()=>navigation.navigate('CheckOut')} />
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.emptyContainer}>
        <Image
          style={styles.img_emptyContainer}
          source={require("../img/cartImg.jpg")}
        />
        <Text style={styles.txt_emptyContainer}>Il tuo carrello è vuoto</Text>
        <Button
          title="Continua lo shopping"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  render: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  total: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  total_txt: {
    fontWeight: "bold",
    fontSize: 18,
  },
  total_price: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 10,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0080ff",
    borderRadius: 5,
    width: "60%",
    height: 35,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  btn_txt: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  emptyContainer: {
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt_emptyContainer: {
    fontSize: 18,
    marginBottom: 20,
  },
  img_emptyContainer: {
    width: 90,
    height: 100,
    marginBottom: 30,
    resizeMode: "center",
  },
});
