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
import GravaTrituradaMedia from "./../../assets/GRAVA_TRI_MEDIA.jpg";
import GravaTriturada34 from "./../../assets/GRAVA_TRI_TRESCUARTOS.jpg";
import GravaTriturada78 from "./../../assets/GRAVA_TRI_SIETEOCTAVOS.jpg";
import GravaTriturada1pulg from "./../../assets/GRAVA_TRI_PULGADAYMEDIA.jpg";
import GravaCantoRodadoMedia from "./../../assets/GRAVA_TRI_MEDIA.jpg";
import GravaCantoRodado34 from "./../../assets/GRAVA_TRI_TRESCUARTOS.jpg";
import GravaCantoRodado78 from "./../../assets/GRAVA_TRI_SIETEOCTAVOS.jpg";
import GravaCantoRodado1pulg from "./../../assets/GRAVA_TRI_PULGADAYMEDIA.jpg";
import SelloTriturado from "./../../assets/SELLOTRITURADO.jpg";
import SelloCantoRodado from "./../../assets/SELLOCANTORODADO.jpg";

export default class Gravas extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaTrituradaMedia} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Grava Triturada Media</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Grava Triturada Media</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaTriturada34} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Grava Triturada 3/4</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Grava Triturada 3/4</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaTriturada78} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Grava Triturada 7/8</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Grava Triturada 7/8</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaTriturada1pulg} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Grava Triturada 1.5 Pulgada</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Grava Triturada 1.5 Pulgadas</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaCantoRodadoMedia} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Grava Canto Rodado</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Grava Canto Rodado Media</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaCantoRodado34} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Grava Canto Rodado 3/4</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Grava Canto Rodado 3/4</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaCantoRodado78} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Grava Canto Rodado 7/8</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Grava Canto Rodado 7/8</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={GravaCantoRodado1pulg} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>
              Grava Canto Rodado 1.5 Pulgadas
            </Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>
              Grava Canto Rodado 1.5 Pulgadas
            </Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={SelloTriturado} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Sello Triturado</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Sello Triturado</Text>
            <Text style={styles.TextoButton}>Precio: $900.00 Mx</Text>
            <Text style={styles.TextoButton}>Cantidad: 3 Mts Cuadrados</Text>
            <Text style={styles.TextoButton}>Recomendaciones:</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Image source={SelloCantoRodado} style={styles.Imagen} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.TextoButton}>Sello Canto Rodado</Text>
            <Text style={styles.TextoButton}>Descripción</Text>
          </View>
          <View style={styles.Card}>
            <Text style={styles.TextoButton}>Sello Canto Rodado</Text>
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
