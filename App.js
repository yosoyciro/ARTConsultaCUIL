import * as React from 'react';
import Inicio from './components/Inicio';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Credencial from './components/Credencial';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Credencial" component={Credencial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
