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
import Escombro from "./../../assets/Escombro.jpg"; 

export default class Escombros extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{marginTop:20}}>
          <View>
            <Image source={Escombro} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Acarreos de Escombro</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Acarreos</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Capacidad: 3 Metros Cuadrados</Text>
          </View>
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
  Imagen: {
    height: 250,
    width: 250,
    marginTop: 15,
  },
  TextoButton: {
    fontSize: 20,
    color: "#fff",
  },
  Card: {
    height: 250,
    width: 250,
    backgroundColor: "#053237",
    justifyContent: "center",
    alignItems: "center",
  },
});
