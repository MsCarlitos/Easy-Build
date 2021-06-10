import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
//import Ladrillo from "./../../assets/LADRILLO.jpg";
import firebase from "../FirebaseDB/Firebase.js";

// var ladrillosRef = sessionStorage.ladrillosName;
// database.ref('Materiales/Ladrillos' + ladrillosName).on('value').then(function(snapshot) {
//   var ladrillos = snapshot.key;
//   snapshot.forEach(function(snapshot1) {

//   })
// })
export default class Ladrillos extends React.Component {
  constructor() {
    super();
    this.LadrillosRef = firebase.database().ref("Materiales/Ladrillos");
    this.state = {
      isLoading: true,
      userArr: [],
    };
  }

  // LadrillosRef.on('value', function(snapshot){
  //   updateLadrillos(PostElement, snapshot.val());
  // })

  componentDidMount() {
    this.unsubscribe = this.LadrillosRef.onSnapshot(this.getLadrillos);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getLadrillos = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { Cantidad, Medida, Nombre, Precio, Imagen } = res.data();
      userArr.push({
        key: res.id,
        res,
        Cantidad,
        Medida,
        Precio,
        Nombre,
        Imagen,
      });
      this.setState({
        userArr,
        isLoading: false,
      });
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="purple" />
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.userArr.map((item, i) => {
            return (
              <View style={{ marginTop: 20 }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={styles.TextoButton}>
                    Nombre: {item.Nombre}
                  </Text>
                </View>
                <View style={styles.Card}>
                  <Text style={styles.TextoButton}>
                    Nombre: {item.Nombre}
                  </Text>
                  <Text style={styles.TextoButton}>
                    Precio: ${item.Precio} Mx
                  </Text>
                  <Text style={styles.TextoButton}>
                    Medida: {item.Medida}{" "}
                  </Text>
                  <Text style={styles.TextoButton}>
                    Cantidad: {item.Cantidad}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
