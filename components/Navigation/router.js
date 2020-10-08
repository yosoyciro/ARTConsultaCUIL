import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../Pantallas/Menu';
import VerDatos from '../Pantallas/VerDatos';
import PreguntasFrecuentes from '../Pantallas/PreguntasFrecuentes';
import DatosUtiles from '../Pantallas/DatosUtiles';
import Medicos from '../Pantallas/Medicos';
import Farmacias from '../Pantallas/Farmacias';
import Maps from '../Pantallas/Maps';
import Credencial from '../Pantallas/Credencial';
import ProcedimientoDenuncia from '../Pantallas/ProcedimientoDenuncia';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      checkedSignIn: false,
    };
  }

  componentDidMount() {
    /*isSignedIn()
      .then(res => this.setState({signedIn: res, checkedSignIn: true}))
      .catch(err => console.log('An error occurred ' + err));*/
  }
  /*createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerDatos"
        component={VerDatos}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );*/

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VerDatos"
            component={VerDatos}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Credencial"
            component={Credencial}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProcedimientoDenuncia"
            component={ProcedimientoDenuncia}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PreguntasFrecuentes"
            component={PreguntasFrecuentes}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DatosUtiles"
            component={DatosUtiles}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Medicos"
            component={Medicos}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Farmacias"
            component={Farmacias}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Maps"
            component={Maps}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
