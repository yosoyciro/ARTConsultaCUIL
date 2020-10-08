import React from 'react';
import {StyleSheet, Image} from 'react-native';

export default function IconoMenu(props) {
  function icono(id) {
    console.log('id: ' + props.id);
    switch (id) {
      case 1: //Mis datos
        return (
          <Image
            source={require('../../images/Iconos/MisDatos.png')}
            style={styles.icono}
          />
        );
      case 2: //Credencial
        return (
          <Image
            source={require('../../images/Iconos/Credencial.png')}
            style={styles.icono}
          />
        );
      case 3: //Proc denuncia
        return (
          <Image
            source={require('../../images/Iconos/ProcedimientodeDenuncia.png')}
            style={styles.icono}
          />
        );
      case 6: //Datos utiles
        return (
          <Image
            source={require('../../images/Iconos/DatosUtiles.png')}
            style={styles.icono}
          />
        );
      case 8: //Preguntas frecuentes
        return (
          <Image
            source={require('../../images/Iconos/PreguntasFrecuentes.png')}
            style={styles.icono}
          />
        );
      case 61: //Datos utiles --> atencion al cliente
        return (
          <Image
            source={require('../../images/Iconos/AtencionalCliente.png')}
            style={styles.icono}
          />
        );
      case 611: //Datos utiles --> atencion al cliente --> tel
        return (
          <Image
            source={require('../../images/Iconos/Telefono.png')}
            style={styles.iconoItem}
          />
        );
      case 612: //Datos utiles --> atencion al cliente --> whatsapp
        return (
          <Image
            source={require('../../images/Iconos/WhatsApp.png')}
            style={styles.iconoItem}
          />
        );
      case 62: //Datos utiles --> conmutador
        return (
          <Image
            source={require('../../images/Iconos/Conmutador.png')}
            style={styles.icono}
          />
        );
      case 621: //Datos utiles --> atencion al cliente --> tel
        return (
          <Image
            source={require('../../images/Iconos/Telefono.png')}
            style={styles.iconoItem}
          />
        );
      case 622: //Datos utiles --> atencion al cliente --> whatsapp
        return (
          <Image
            source={require('../../images/Iconos/Mail.png')}
            style={styles.iconoItem}
          />
        );
      case 63: //Datos utiles --> gestion nacional
        return (
          <Image
            source={require('../../images/Iconos/GestionNacional.png')}
            style={styles.icono}
          />
        );
      case 631: //Datos utiles --> atencion al cliente --> tel
        return (
          <Image
            source={require('../../images/Iconos/Telefono.png')}
            style={styles.iconoItem}
          />
        );
      default:
        return null;
    }
  }

  return icono(props.id);
}

//#region Estilos
const styles = StyleSheet.create({
  icono: {
    //padding: 5,
    //margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    backgroundColor: '#F8A700',
    left: 4,
    position: 'absolute',
  },
  iconoItem: {
    //padding: 2,
    //margin: 1,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    backgroundColor: '#ED6F00',
    left: 2,
    position: 'absolute',
  },
});
//#endregion
