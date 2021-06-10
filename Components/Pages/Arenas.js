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
import ArenaNormal from "./../../assets/ARENA_NORMAL.jpg";
import ArenaTriturada from "./../../assets/ARENA_TRITURADA.jpg";
import ArenaLavada from "./../../assets/ARENA_LAVADA.jpg";


export default class Arenas extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{marginTop:20}}>
          <View>
            <Image source={ArenaNormal} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Arena Standard</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Arena Tipo Standard</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{marginTop:20}}>
          <View>
            <Image source={ArenaTriturada} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Arena Triturada</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Arena Triturada</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{marginTop:20}}>
          <View>
            <Image source={ArenaLavada} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Arena Lavada</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Arena Tipo Lavada</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
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
