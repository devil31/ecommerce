import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import SingleProduct from "../components/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { addCart, fetchCart, updateCart } from "../store/actions/Cart";
import { TouchableOpacity } from "react-native-gesture-handler";

const DetailProduct = ({ route, navigation }) => {
  const [qnt, setQnt] = useState(0);

  const { id } = route.params;
  const { title } = route.params;
  const { image } = route.params;
  const { price } = route.params;
  const { description } = route.params;
  const { quantity } = route.params;

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const stateCart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch(addCart());

  const ceckId = stateCart.Cart.map((idCart) => {
    return idCart.id;
  });

  const key = stateCart.Cart.map((cart) => {
    return {
      cartid: cart.id,
      cartkey: cart.key,
      cartqnt: cart.quantity,
    };
  });

  const filterKey = key.filter(function (e) {
    return e.cartid === id;
  });

  const singleKey = filterKey.map((key) => {
    return key.cartkey;
  });
  const upqnt = filterKey.map((qnt) => {
    return qnt.cartqnt;
  });

  const addItem = () => {
    if (qnt < 1) {
      alert("la quantità non può essere inferiore ad 1 ");
      setQnt(1);
      return;
    }
    if (!ceckId.includes(id)) {
      dispatch(addCart(id, title, image, price, quantity + qnt));
      dispatch(fetchCart());
      alert("aggiunto nel carrello");
      navigation.navigate("Cart");
    } else {
      const quantity = qnt + upqnt[0];
      dispatch(updateCart(id, title, image, price, quantity, singleKey));
      dispatch(fetchCart());
      alert("aggiunto nel carrello");
      navigation.navigate("Cart");
    }
  };

  const add = () => {
    setQnt(qnt + 1);
  };
  const less = () => {
    setQnt(qnt - 1);
  };

  return (
    <View style={styles.container}>
      <SingleProduct
        id={id}
        title={title}
        image={image}
        add={add}
        less={less}
        qnt={qnt}
        description={description}
      />
      <TouchableOpacity style={styles.btn} onPress={addItem}>
        <Text style={styles.txtBtn}>add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',   
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#0080ff",
    height: 35,
    borderRadius: 6,
    marginTop: 20,
  },
  txtBtn: {
    textAlign: "center",
    color: "white",
  },
});
