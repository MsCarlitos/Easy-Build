import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import firebase from "../FirebaseDB/Firebase.js";

export default class Ladrillos extends React.Component {
  constructor() {
    super();
    this.LadrillosRef = firebase.firestore().collection("Ladrillos");
    this.state = {
      isLoading: true,
      userArr: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.LadrillosRef.onSnapshot(this.getLadrillos);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getLadrillos = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { Cantidad, Medida, Nombre, Precio } = res.data();
      userArr.push({
        key: res.id,
        res,
        Cantidad,
        Medida,
        Precio,
        Nombre,
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
                  <Text style={styles.TextoButton}>Nombre: {item.Nombre}</Text>
                </View>
                <View style={styles.Card}>
                  <Text style={styles.TextoButton}>Nombre: {item.Nombre}</Text>
                  <Text style={styles.TextoButton}>
                    Precio: ${item.Precio} Mx
                  </Text>
                  <Text style={styles.TextoButton}>Medida: {item.Medida} </Text>
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
