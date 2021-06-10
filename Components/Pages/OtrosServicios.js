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
import PiedraBola from "./../../assets/PIEDRA_BOLA.jpg";
import Base from "./../../assets/BASE.jpg";
import Limpieza from "./../../assets/LIMPIEZA.jpg";

export default class OtrosServicios extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={PiedraBola} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Piedra Bola</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Piedra Bola</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Recomendaciones</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={Base} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Base</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Base</Text>
            <Text style={styles.TextoButton}>Mezcla De Arena Con Grava</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Recomendaciones</Text>
            <Text style={styles.TextoButton}>
              Se Utiliza Para Relleno ò Retoques
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={Limpieza} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Limpieza de Terreno</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Limpieza</Text>
            <Text style={styles.TextoButton}>Limpieza de Terrenos</Text>
            <Text style={styles.TextoButton}>Precio: Varia Segùn Tamaño Del Terreno</Text>
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
