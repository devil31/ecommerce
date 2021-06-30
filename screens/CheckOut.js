import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Btn from "../components/Btn";

const CheckOut = ({ navigation }) => {
  const check = () => {
    alert(`Grazie per l'acquisto`);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtCart}>Carta di credito</Text>
      <TextInput
        style={styles.nCart}
        placeholder="Numero della carta"
        autoCompleteType="password"
      />

      <View style={styles.txt_cvvDate}>
        <Text style={{ width: "45%", fontSize: 12 }}>Codice di sicurezza</Text>
        <Text style={{ width: "45%", fontSize: 12 }}>Data di scadenza</Text>
      </View>

      <View style={styles.box}>
        <TextInput style={styles.cvv} placeholder="CVV" />
        <TextInput style={styles.date} placeholder="MM/AA" />
      </View>      
      <Btn txt={"Invia Ordine"} onPress={check} />
    </View>
  );
};

export default CheckOut;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  nCart: {
    borderWidth: 1,
    width: "80%",
    marginTop: 5,
    borderRadius: 5,
    height: 50,
    padding: 10,
  },
  txtCart: {
    marginTop: 30,
    alignSelf: "center",
    width: "80%",
    fontSize: 12,
  },

  txt_cvvDate: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
    marginTop: 30,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 5,
    marginBottom:80,
  },
  cvv: {
    borderWidth: 1,
    width: "45%",
    height: 50,
    borderRadius: 5,
    textAlign: "center",
  },
  date: {
    borderWidth: 1,
    width: "45%",
    height: 50,
    borderRadius: 5,
    textAlign: "center",
  },
});
