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
import DcovaLogo from "./../../assets/3DCOVA_AMARILLO.png";

export default class Ayuda extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Para contactar con los Desarrolladores</Text>
            <Text style={styles.TextoButton}>favor de enviar un correo electrónico a:</Text>
            <Text style={styles.TextoButton}>Dcova@gmail.com</Text>
            <Text style={styles.TextoButton}>Carlos Mendoza Contreras</Text>
            <Text style={styles.TextoButton} >Elizabeth López Varela</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={DcovaLogo} style={styles.Imagen} />
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
    height: 80,
    width: 230,
    marginTop: 35,
  },
  TextoButton: {
    fontSize: 20,
    color: "#fff",
  },
  Card: {
    height: 250,
    width: 400,
    backgroundColor: "#053237",
    justifyContent: "center",
    alignItems: "center",
  },
});
