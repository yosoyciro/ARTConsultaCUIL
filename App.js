import React, {Component} from 'react';
import Layout from './components/Navigation/router';
import Orientation from 'react-native-orientation';
import Splash from './components/Visuales/Splash';
import Inicio from './containers/Inicio';

//import {registerRootComponent} from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
    };
  }

  render() {
    //return <>{this.state.showSplash === false ? <Layout /> : <Splash />}</>;
    return <Inicio />;
  }
}
