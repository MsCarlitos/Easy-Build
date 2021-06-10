import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import EASYBUIL_LOGOL from "./../../assets/EASYBUIL_LOGOL.png";

export default class PaginaPrincipal extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={EASYBUIL_LOGOL} style={styles.Imagen} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#65ba9b",
    alignItems: "center",
    justifyContent: "center",
  },
  Texto: {
    fontSize: 35,
    color: "#373431",
    textAlign: "center",
  },
  Imagen: {
    height: 150,
    width: 350,
  },
  Button: {
    marginTop: 25,
    width: 300,
    height: 40,
    backgroundColor: "#053237",
    borderRadius: 10,
    alignItems: "center",
  },
  TextoButton: {
    fontSize: 20,
    color: "#fff",
  },
  ButtonCC: {
    marginTop: 25,
    width: 190,
    height: 40,
    backgroundColor: "#053237",
    borderRadius: 10,
    alignItems: "center",
  },
  TextoEmail: {
    fontSize: 20,
    color: "#fff",
  },
  input: {
    height: 40,
    width: 350,
    backgroundColor: "#F2F4F4",
    marginTop: 10,
  },
  Card: {
    height: 150,
    width: 350,
    backgroundColor: "#fff",
  },
  CheckBox: {
    flex: 1,
    flexDirection: "row",
  },
  TextoOC: {
      fontSize: 15,
      color: 'blue',
      marginLeft: 45, 
  },
});
