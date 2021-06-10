import React from "react";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
//import DrawerButton from "./Components/Pages/DrawerButton.js";
import Inicio from "./Components/Pages/Inicio.js";
import Login from "./Components/Pages/Login.js";
import Registro from "./Components/Pages/Inicio2.js";
import PaginaPrincipal from "./Components/Pages/PaginaPrincipal.js";
import Arenas from "./Components/Pages/Arenas.js";
import Gravas from "./Components/Pages/Gravas.js";
import Tierra from "./Components/Pages/Tierra.js";
import Ladrillos from "./Components/Pages/Ladrillos.js";
import Escombro from "./Components/Pages/Escombros.js";
import OtrosServicios from "./Components/Pages/OtrosServicios.js";
import Pedido from "./Components/Pages/Pedido.js";
import Información from "./Components/Pages/Información.js";
import Ayuda from "./Components/Pages/Ayuda.js";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Paginas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Iniciar Sesión"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Página Principal"
        component={PaginaPrincipal}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => <TouchableOpacity color="#053237" />,
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Ladrillos">
      <Drawer.Screen name="Página Principal" component={Paginas} />
      <Drawer.Screen
        name="Arena"
        component={Arenas}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Grava"
        component={Gravas}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Tierra"
        component={Tierra}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Ladrillos"
        component={Ladrillos}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Escombro"
        component={Escombro}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Otros Servicios"
        component={OtrosServicios}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Hacer Un Pedido"
        component={Pedido}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Información"
        component={Información}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
       <Drawer.Screen
        name="Ayuda"
        component={Ayuda}
        options={{
          headerBackTitle: "none",
          headerStyle: {
            backgroundColor: "#053237",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
}
