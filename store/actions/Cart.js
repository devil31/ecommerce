import axios from "axios";
export const FETCH_CART = "FETCH_CART";
export const REMOVE_CART = "REMOVE_CART";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";

export const fetchCart = () => {
  return async (dispatch) => {
    const CartData = await axios.get(
      "https://ecommerce-dc417-default-rtdb.europe-west1.firebasedatabase.app/Cart.json"
    );

    const CartList = [];

    for (let key in CartData.data) {
      CartList.push({
        id: CartData.data[key].id,
        title: CartData.data[key].title,
        image: CartData.data[key].image,
        price: CartData.data[key].price,
        quantity: CartData.data[key].quantity,
        key: key,
      });
    }
    dispatch({
      type: FETCH_CART,
      Cart: CartList,
    });
  };
};

export const addCart = (id, title, image, price, quantity) => {
  return async (dispatch) => {
    try {
      const add = await axios.post(
        "https://ecommerce-dc417-default-rtdb.europe-west1.firebasedatabase.app/Cart.json",
        {
          id: id,
          title: title,
          image: image,
          price: price,
          quantity: quantity,
        }
      );
      dispatch(fetchCart());
      dispatch({
        type: ADD_CART,
        addCart: add,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = (
  id,
  title,
  image,
  price,
  quantity,
  singleKey
) => {
  return async (dispatch) => {
    try {
      const cartUpdated = await axios.put(
        `https://ecommerce-dc417-default-rtdb.europe-west1.firebasedatabase.app/Cart/${singleKey}.json`,
        {
          id: id,
          title: title,
          image: image,
          price: price,
          quantity: quantity,
        }
      );
      

      dispatch({
        type: UPDATE_CART,
        updateCart: cartUpdated,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeCart = (cartKey) => {
  return async (dispatch) => {
    try {
      const remove = await axios.delete(
        `https://ecommerce-dc417-default-rtdb.europe-west1.firebasedatabase.app/Cart/${cartKey}.json`
      );
      dispatch(fetchCart());

      dispatch({
        type: REMOVE_CART,
        remove: remove,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
