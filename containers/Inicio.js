import React, {Component} from 'react';
import Layout from '../components/Navigation/router';

export default class Inicio extends Component {
  render() {
    //return <>{this.state.isLogged === true ? <Layout /> : <Login />}</>;
    return <Layout />;
  }
}
