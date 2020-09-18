import moment from 'moment';

function FormatearFechaCelda(fecha) {
  console.log('FormatoFechaHora: ' + fecha);
  switch (fecha) {
    case '0001-01-01T00:00:00':
      return '';

    default:
      if (new Date(fecha).getFullYear() !== 1800) {
        return `${
          moment(fecha).format('DD-MM-YYYY')
            ? moment(fecha).format('DD-MM-YYYY')
            : moment(fecha).format('DD-MM-YYYY')
        }`;
      } else {
        return '';
      }
  }
}

export default FormatearFechaCelda;
