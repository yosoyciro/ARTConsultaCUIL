import React, {Component} from 'react';
import Layout from './components/Navigation/router';
import Orientation from 'react-native-orientation';
import Splash from './components/Visuales/Splash';

//import {registerRootComponent} from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
    };
  }

  componentDidMount() {
    Orientation.lockToPortrait();
    //console.log('Inicio showSplash: ' + this.state.showSplash);
    setTimeout(() => {
      this.setState({showSplash: false});
    }, 3000);
  }

  render() {
    return <>{this.state.showSplash === false ? <Layout /> : <Splash />}</>;
  }
}
