import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

export default class CajaMenu extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.handleCajaMenu(this.props.id);
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        //alignItems: 'center',
        alignSelf: 'stretch',
      },
      cajas: {
        flexDirection: 'row',
        marginTop: 15,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#f8a700',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#f8a700',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 40,
      },
      texto: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
      },
      icono: {
        padding: 5,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        backgroundColor: '#83BC00',
        left: 2,
        position: 'absolute',
      },
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity
          disabled={this.props.disable}
          style={styles.cajas}
          activeOpacity={0.5}
          onPress={this.onPress}>
          <Image
            source={require('../../images/Atención-al-Cliente.png')}
            style={styles.icono}
          />
          <Text style={styles.texto}> {this.props.texto} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
