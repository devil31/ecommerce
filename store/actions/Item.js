import axios from "axios";
export const FETCH_ITEMS = "FETCH_ITEMS";

export const fetchItem = () => {
  return async (dispatch) => {
    const ItemData = await axios.get(
      "https://ecommerce-dc417-default-rtdb.europe-west1.firebasedatabase.app/prodotti/elettronica.json"
    );

    const myData = ItemData.data;
    const ItemList = [];
    for (let key in myData) {
      ItemList.push({
        id: myData[key].id,
        title: myData[key].title,
        image: myData[key].image,
        price: myData[key].price,
        description: myData[key].description,
        quantity: myData[key].quantity,
      });
    }

    dispatch({
      type: FETCH_ITEMS,
      items: ItemList,
    });
  };
};
