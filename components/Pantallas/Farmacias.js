import React, {Component} from 'react';
import Emergencia from '../Visuales/Emergencia';
import Titulo from '../Visuales/Titulo';

export default class Farmacias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicos: [
        {
          id: 1,
          Nombre: 'Farmacia 1',
          Latitud: -27.451937,
          Longitud: -58.981913,
        },
        {
          id: 2,
          Nombre: 'Farmacia2',
          Latitud: 0,
          Longitud: 0,
        },
      ],
    };
  }

  render() {
    <>
      <Titulo titulo="Farmacias" />
      <Emergencia backgroundColor="white" />
    </>;
  }
}
