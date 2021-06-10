import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import EASYBUIL_LOGOL from "./../../assets/EASYBUIL_LOGOL.png";
export default class Inicio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.Texto}>¡Bienvenido(a)!</Text>
        </View>
        <View style={{ marginTop: 13 }}>
          <Image source={EASYBUIL_LOGOL} style={styles.Imagen} />
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.push("Iniciar Sesión")}
          >
            <View style={styles.Button}>
              <Text style={styles.TextoButton}>Iniciar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.push("Registro")}
          >
            <View style={styles.Button}>
              <Text style={styles.TextoButton}>Registrar</Text>
            </View>
          </TouchableOpacity>
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
    fontSize: 28,
    color: "#053237",
    textAlign: "center",
    fontWeight: "bold",
  },
  Imagen: {
    height: 150,
    width: 350,
  },
  Button: {
    marginTop: 20,
    width: 290,
    height: 38,
    backgroundColor: "#053237",
    borderRadius: 10,
    alignItems: "center",
  },
  TextoButton: {
    fontSize: 20,
    color: "#fff",
  },
});