import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Pantallas/Login';
import Menu from '../Pantallas/Menu';
import VerDatos from '../Pantallas/VerDatos';
//import Credencial from '../../screens/drawer/Credencial';
import PreguntasFrecuentes from '../Pantallas/PreguntasFrecuentes';
import DatosUtiles from '../Pantallas/DatosUtiles';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
