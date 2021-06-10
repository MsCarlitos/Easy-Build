import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import EASYBUIL_LOGOL from "./../../assets/EASYBUIL_LOGOL.png";
import firebase from "../FirebaseDB/Firebase";
export default class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  signUpUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        if (this.state.password.length < 6) {
          alert("La contraseña debe tener al menos 6 caracteres");
          return;
        }
        alert("Usuario Creado!");
        this.props.navigation.navigate("Pagina Principal");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("El correo ya esta en uso!");
        }
        if (error.code === "auth/invalid-email") {
          alert("La direccion de correo es invalida!");
        }
        alert(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={EASYBUIL_LOGOL} style={styles.Imagen} />
        </View>
        <View style={styles.Card}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Correo"
              onChangeText={(email) => {
                this.setState({ email: email });
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(password) => {
                this.setState({ password: password });
              }}
            />
          </View>
          <View style={styles.CheckBox}>
            <input type="checkbox" />
            <Text> Mostrar Contraseña </Text>
            <TouchableOpacity>
              <Text style={styles.TextoOC}>Olvide La Contraseña</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            onPress={() =>
              this.signUpUser(this.state.email.trim(), this.state.password)
            }
          >
            <View style={styles.ButtonCC}>
              <Text style={styles.TextoEmail}>Crear Cuenta</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 8 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Inicio");
            }}
          >
            <View style={styles.ButtonCC}>
              <Text style={styles.TextoEmail}>Volver</Text>
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
    color: "blue",
    marginLeft: 45,
  },
});
