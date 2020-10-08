import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Header from '../Visuales/Header';
import TituloMedico from '../Visuales/TituloMedico';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //latitud: 0,
      //longitud: 0,
    };
  }
  /*componentDidMount() {
    this.setState({
      latitud: this.props.route.params.latitud,
      longitud: this.props.route.params.longitud,
    });
  }*/
  render() {
    //let latitud = parse(this.props.route.params.latitud);
    //let longitud = parseFloat(this.props.route.params.longitud);
    console.log('latitud  ' + this.state.latitud);
    return (
      <>
        <Header />
        <View>
          <TituloMedico
            nombre={this.props.route.params.nombre}
            direccion={this.props.route.params.direccion}
          />
        </View>
        <View style={styles.MainContainer}>
          <MapView
            style={styles.mapStyle}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              latitude: this.props.route.params.latitud,
              longitude: this.props.route.params.longitud,
              latitudeDelta: 0.001,
              longitudeDelta: 0.002,
            }}>
            <Marker
              coordinate={{
                latitude: this.props.route.params.latitud,
                longitude: this.props.route.params.longitud,
              }}
              title={this.props.route.params.nombre}
              description={this.props.route.params.direccion}
            />
          </MapView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 125,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
