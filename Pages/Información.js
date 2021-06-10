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
import Carro from "./../../assets/EASYBUIL_LOGOCAR.png";


export default class Información extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{marginTop:20}}>
          <View>
            <Image source={Carro} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Información Del vehículo</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Carro Ford </Text>
            <Text style={styles.TextoButton}>Capacidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones: Favor De Realizar Su Pedido 24hrs Antes De La Fecha De Entrega.</Text>
            <Text style={styles.TextoButton}>Lunes a Sábados</Text>
            <Text style={styles.TextoButton}>6:00 AM - 12:00 PM</Text>
            <Text style={styles.TextoButton}>Martín López Pacheco. Propietario </Text>
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
    width: 350,
    marginTop: 15,
  },
  TextoButton: {
    fontSize: 20,
    color: "#fff",
  },
  Card: {
    height: 230,
    width: 430,
    backgroundColor: "#053237",
    justifyContent: "center",
    alignItems: "center",
  },
});
