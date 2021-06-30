import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import ProductSearch from "./screens/ProductSearch";
import DetailProduct from "./screens/DetailProduct";
import Cart from "./screens/Cart";
import IconCart from "./components/IconCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "./store/actions/Cart";
import SearchBar from "./components/SearchBar";
import HeaderButton from "./components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import CheckOut from "./screens/CheckOut";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Navigation}
          options={{
            title: "Home",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={goCart}
          options={{
            title: "Cart",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="cart"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function goCart({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Carrello"
        component={Cart}
        options={{
          headerStyle: { backgroundColor: "lightblue" },
          headerTintColor: "white",
          headerLeft: () => (
            <HeaderButton onPressLeft={() => navigation.toggleDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const dispatch = useDispatch();
  const stateCart = useSelector((state) => state.CartReducer);

  const totQnt = stateCart.Cart.map((qnt) => {
    return qnt.quantity;
  });

  const sum = totQnt.reduce(function (a, b) {
    return a + b;
  }, 0);

  const change = (e) => {
    setText(e);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTintColor: "#fff",
          headerLeft: () => (
            <HeaderButton onPressLeft={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <IconCart
              onPressCart={() => navigation.navigate("Cart")}
              numb={sum}
            />
          ),
          headerTitle: () => (
            <SearchBar
              value={text}
              onChange={change}
              onPress={() =>
                navigation.navigate("ProductSearch", {
                  text: text.toLocaleLowerCase(),
                })
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{
          title: "Dettagli",
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="ProductSearch"
        component={ProductSearch}
        options={{
          title: "",
          headerStyle: { backgroundColor: "lightblue" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title:'Carrello',
          headerStyle: { backgroundColor: "lightblue" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{
          title:'Fatturazione',
          headerStyle: { backgroundColor: "lightblue" },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}

export default DrawerNavigation;
