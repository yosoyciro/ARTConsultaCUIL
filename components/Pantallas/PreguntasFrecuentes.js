import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Titulo from '../Visuales/Titulo';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class PreguntasFrecuentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: [
        {
          id: 1,
          title: 'Qué es una ART?',
          body:
            'Las Aseguradoras de Riesgo de Trabajo son Compañías de Seguros que tendrán como objeto único el otorgamiento de las prestaciones que establece la ley.\nLa autorización para funcionar como ART estará a cargo de la SRT y SSN. Esta autorización podrá ser revocada por: \n a) Omisión de otorgamiento íntegro y oportuno de las prestaciones de la ley. \n b) Cuando se verifiquen deficiencias graves en el cumplimiento de su objeto que no sean subsanadas en los plazos que establezca la reglamentación expedida por SSN. \n c) Por causas y procedimientos previstos en la LRT y en la ley 20.091 (Ley de Seguros), como por ejemplo pérdida del capital mínimo, liquidación de la casa matriz, etc. \n Los bienes que respaldan las reservas de las ART son inembargables por cualquier crédito que no sea derivado de las obligaciones que establece la LRT, aún en caso de liquidación de la entidad. En este último caso los bienes serán transferidos al Fondo de Reserva, fondo que se ha creado con el fin de afrontar las prestaciones dinerarias y en especie de las ART en liquidación. \n Ley N° 24.557',
        },
        {
          id: 2,
          title: 'Qué cubre una ART?',
          body:
            'La ART cubre dos tipos de contingencias laborales:\n\nAccidente de Trabajo\nEnfermedad Profesional',
        },
        {
          id: 3,
          title:
            '¿Qué es un accidente de trabajo\ny una enfermedad profesional',
          body:
            'Un accidente de trabajo es todo acontecimiento súbito y violento, ocurrido por el hecho o en ocasión del trabajo, o en el trayecto entre el domicilio del trabajador y su lugar de trabajo (y viceversa), siempre y cuando no lo hubiese interrumpido o alterado por causas ajenas al trabajo.\n\nUna enfermedad profesional es una patología causada por agentes que se encuentran en el ambiente de trabajo o por especiales condiciones en el mismo, potencialmente lesivas para la salud. Estos pueden ser físicos, químicos, biológicos o generadores de sobrecarga física para el trabajador expuesto. Es condición "sine qua non", que exista un vínculo inexcusable entre la enfermedad y la presencia en el trabajo de los agentes o condiciones que posibiliten la gestación de un daño a la salud. Es decir, debe existir una enfermedad o daño al organismo que provenga claramente de la exposición del trabajador a los agentes o condiciones causantes.\n\nLey N° 24.557',
        },
        {
          id: 4,
          title: '¿Cuáles son los objetivos de las ART?',
          body:
            'a) La reducción de la siniestralidad laboral a través de la asistencia técnica y el asesoramiento al empleador en el cumplimiento de sus obligaciones en materia de prevención de los riesgos derivados del trabajo.\nb) La reparación de los daños derivados de accidentes de trabajo y de enfermedades profesionales, incluyendo la rehabilitación del trabajador damnificado.\nc) La promoción de la recalificación y la recolocación de los trabajadores damnificados.\nd) La promoción de la negociación colectiva laboral para la mejora de las medidas de prevención.\n\nLey N° 24.557',
        },
        {
          id: 5,
          title: '¿Cuáles son las obligaciones de las ART?',
          body:
            'Las obligaciones de las ART son:\n\na) Declarar en el Registro de Cumplimiento de Normas de Higiene, Salud y Seguridad en el Trabajo, con carácter de declaración jurada, dentro de los 40 días corridos de recibido el Relevamiento General de Riesgos Laborales (RGRL) y el plan de regularización de los incumplimientos denunciados.\nb) Denunciar en el Registro mencionado a los empleadores que no hayan presentado el RGRL al momento de la afiliación y a aquellos que no hayan cumplido con el Plan fijado oportunamente.\nc) Verificar la verosimilitud del relevamiento realizado por el empleador y evaluar si la consistencia del cronograma de regularización se adecua a las características y riesgos de la actividad.\nd) Realizar visitas de verificación de cumplimiento de la normativa de Higiene y Seguridad, según el art. 11 de la Resolución 463/09.\ne) Brindar asesoramiento y ofrecer asistencia técnica a los empleadores afiliados, en las siguientes materias:\n1. La existencia de riesgos y sus potenciales efectos sobre la salud de los trabajadores en el o los establecimientos de ámbito del Contrato.\n2. Normativa vigente en materia de higiene y seguridad en el trabajo.\n3. Selección de elementos de protección personal.\n4. Capacitación que corresponde brindar a los trabajadores.\n5. Información sobre la seguridad en el empleo de productos químicos y biológicos.\nf) Realizar los exámenes médicos periódicos de acuerdo con el formulario Relevamiento de Agentes de Riesgo (RAR), el listado de expuestos y toda la documentación respaldatoria que debe presentar el empleador en forma anual, o ante la ocurrencia de cualquier cambio en el proceso o en la organización del trabajo.\ng) Proveer prestadores médicos para la efectiva realización de los exámenes médicos periódicos y coordinar con el empleador la fecha de realización de los mismos.\nh) Poner a disposición del empleador y/o de los empleados los informes de resultados de los exámenes médicos realizados con sus respectivas recomendaciones.\ni) Denunciar ante la S.R.T. todos los incumplimientos a las normas de Higiene y Seguridad en el Trabajo vigentes.\nj) Mantener un registro actualizado de accidentes y enfermedades profesionales. Realizar actividades permanentes de prevención de riesgos y control de las condiciones y medio ambiente de trabajo.\nk) Promover la integración de comisiones paritarias de riesgos del trabajo y colaborar en su capacitación.\nl) Informar al empleador y a los trabajadores sobre el sistema de prevención establecido en la Ley de Riesgos del Trabajo, en particular sobre los derechos y deberes de cada una de las partes.\nm) Colaborar en las investigaciones y acciones de promoción de la prevención que desarrolle la Superintendencia de Riesgos del Trabajo.\nn) Cumplir toda obligación que establezca la Superintendencia de Riesgos del Trabajo.\no) Para cumplir con las obligaciones establecidas precedentemente, las Aseguradoras deberán contar con profesionales especializados en higiene y seguridad y medicina del trabajo de modo que asegure la atención en materia de prevención de riesgos de sus afiliados.\np) Tener acceso a la información necesaria para cumplir con las prestaciones de la Ley de Riesgos del Trabajo.\nq) Cumplir con las acciones establecidas en las Resoluciones SRT Nro. 559/09 - 51/97- 552/01 - 550/11 - 230/03 - 1721/04 y 1392/05 - 01/05 - 463/09 y modificatorias que correspondan a las mismas.\nr) Poner a disposición del empleador el listado de prestadores, que brindará cobertura a nivel nacional en caso de producirse un accidente laboral o declararse una enfermedad profesional.\ns) Cuando la ART detecte incumplimientos por parte del empleador a las normas de higiene y seguridad en el trabajo, como asimismo los que resulten del Relevamiento General de Riesgos Laborales o los programas específicos establecidos por la Superintendencia de Riesgos del Trabajo, deberá notificarlo a la Superintendencia de Riesgos del Trabajo.\nt) Notificar a la SRT las altas y bajas de empleadores afiliados.',
        },
        {
          id: 6,
          title: '¿Qué es una ART MUTUAL?',
          body:
            'Son entidades asociativas de seguros mutuos sin fines de lucro, constituidas por las asociaciones profesionales de empleadores o grupos de empleadores y las asociaciones sindicales de trabajadores con personería gremial.\n(Decreto N° 1720/12)',
        },
        {
          id: 7,
          title: '¿Quiénes están cubiertos?',
          body:
            'Obligatoriamente están cubiertos los funcionarios y empleados del sector público nacional, de las provincias y sus municipios y la Ciudad Autónoma de Buenos Aires; los trabajadores en relación de dependencia del sector privado; los trabajadores de casas particulares; los pasantes y las personas obligadas a prestar un servicio de carga pública. Es requisito que el trabajador se encuentre registrado.',
        },
        {
          id: 8,
          title: '¿Cuáles son las obligaciones\nde los Empleados?',
          body:
            'a) Recibirán de su empleador información y capacitación en materia de prevención de riesgos del trabajo, debiendo participar en las acciones preventivas.\nb) Cumplirán con las normas de higiene y seguridad, incluido el Plan de Mejoramiento, así como con las medidas de recalificación profesional.\nc) Informarán al empleador de todo hecho o circunstancia riesgosa inherente a sus puestos de trabajo y al establecimiento en general.\nd) Se someterán a la realización de los exámenes médicos periódicos que se le indiquen según la exposición a Riesgos declarada por el empleador.\ne) Se someterán a los tratamientos de médicos y de rehabilitación indicados por la Aseguradora. En caso de negarse, la Aseguradora podrá suspender las prestaciones conforme a lo establecido por el Artículo 20° de la Ley Nº 24.557.\nf) Denunciarán ante el empleador los accidentes y enfermedades profesionales que sufran.\ng) Los empleados además deberán:\n\n1.	Utilizar los equipos de protección personal o colectiva y observar las medidas de protección impartidas en los cursos de capacitación.\n2.	Utilizar o manipular en forma correcta y segura las sustancias, máquinas, herramientas, dispositivos y cualquier otro medio con que desarrollen su actividad laboral conforme a la capacitación brindada por el empleador.\n3.	Observar las indicaciones de los carteles y avisos sobre medidas de protección, y colaborar con el empleador en materia de salud y seguridad.\n4.	Colaborar en la organización de programas de formación y educación en materia de salud y seguridad.\n5.	Informar al empleador de todo hecho o sustancia riesgosa.\n6.	Portar la credencial de la Aseguradora de Riesgos de Trabajo en forma permanente.',
        },
        {
          id: 9,
          title: '¿Cómo se financia el sistema?',
          body:
            'Conforme a lo establecido por el Artículo 23° de la Ley N° 24.557 sobre Riesgos del Trabajo, las prestaciones se financiarán con el pago de una cuota mensual a cargo del empleador, la que deberá ser declarada y abonada conjuntamente con los aportes y contribuciones que integran al CUSS, estando su fiscalización, verificación y control a cargo de la ART.\n\nEn este sentido, el Decreto N° 334/96 dispone que la cuota será declarada e ingresada durante el mes en que se brinden las prestaciones, con las mismas modalidades, plazos y condiciones establecidos para el pago de los aportes y contribuciones con destino a la seguridad social, en función de la nómina salarial del mes anterior.',
        },
        {
          id: 10,
          title: '¿Cómo se declara y se abona la alícuota?',
          body:
            'La alícuota se declara e ingresa durante el mes en que se brinden las prestaciones, con las mismas modalidades, plazos y condiciones establecidos para el pago de los aportes y contribuciones con destino a la seguridad social, en función de la nómina salarial del mes anterior.\n\nCon respecto a los empleadores no obligados con el Sistema único de Seguridad Social (SUSS), las cotizaciones se abonan bajo las mismas condiciones, directamente a las aseguradoras.\n\nLa declaración se efectúa utilizando el aplicativo dispuesto por la A.F.I.P., mediante la Resolución General Nº 3757/2015, denominado Sistema de Cálculo de Obligaciones de la Seguridad Social (SICOSS), o bien mediante el sistema Declaración en Línea dispuesto en la Resolución General Nº 3758/2015 como medio obligatorio para aquellos empleadores que tengan hasta 100 empleados inclusive. Este aplicativo calcula en forma automática los montos a abonar, a partirde los datos requeridos de la empresa, de cada empleado y las alícuotas convenidas con la ART. A esto se deberá adicionar el importe fijo de $0,60 correspondiente al Fondo Fiduciario para Enfermedades Profesionales.',
        },
        {
          id: 11,
          title: '¿Cómo se determina la cuota?',
          body:
            'De acuerdo a la Ley 24557 de Riesgos del Trabajo, Art 23, modificado por el Dcto. 334/96, las cuotas del seguro deben declararse e ingresarse en el mes en que se brinden las prestaciones, con las mismas modalidades, plazos y condiciones establecidos para el pago de los aportes y contribuciones con destino al Sistema Único de Seguridad Social (SUSS), en función de la nómina salarial del mes anterior.\n\nDe acuerdo al Decreto 491/97, en todos los casos de inicio de actividades, o cuando por otras razones no exista nómina salarial en el mes anterior, el cálculo se realizará en función de la nómina salarial prevista para el mes en curso. Posteriormente, junto con la declaración ante la AFIP, se realizará el ajuste pertinente.\n\nEl valor a abonar mensualmente, se conforma por un componente FIJO (cápita) por empleado bajo relación de dependencia y uno VARIABLE (prima) aplicable sobre el monto de la masa salarial imponible de todos los empleados.\n\nAdemás, el Dcto. 590/97, modificado posteriormente por el Dcto. 1278/00, crea un fondo especial denominado Fondo Fiduciario para Enfermedades Profesionales (FFEP) a través del cual se garantizan los recursos para hacer frente a las prestaciones dinerarias que deben percibir los trabajadores en virtud de las enfermedades profesionales detectadas por la realización de los Exámenes Médicos Periódicos, mediante una cuota mensual de $0.60 (sesenta centavos) por cada trabajador en relación de dependencia. Este valor debe sumarse al componente FIJO (cápita) a fin poder ser ingresado en el aplicativo del SIJyP.',
        },
        {
          id: 12,
          title: '¿Cómo se informan las\naltas y bajas del personal?',
          body:
            'Las empresas que efectúan sus aportes y contribuciones por medio del Sistema único de Seguridad Social (SUSS) deberán tramitar a través del aplicativo Mi Simplificación de AFIP las novedades de ingreso y egreso de personal dependiente y a continuación informarlo en la DD.JJ. (Form. 931) que presenta ante AFIP.\n\nTodas las altas, bajas y modificaciones realizadas mediante el aplicativo Mi Simplificación, son incluidas en la nómina de su empresa mediante un proceso automático, el día hábil siguiente a partir de las 12 hs. por lo que no es necesario que la empresa cliente las informe a ART MUTUAL RURAL.\n\nLas empresas por fuera del SUSS deberá notificar a la Aseguradora las altas del personal antes del inicio de la relación laboral y las bajas dentro de los 10 días de producidas las mismas.',
        },
        {
          id: 13,
          title:
            '¿Se puede modificar o incorporar cláusulas\nen los certificados de cobertura?',
          body:
            'El contenido de los certificados de cobertura que se emiten por la página Web o se solicitan en las Sucursales y responde a lo establecido en la normativa vigente y su texto cuenta con la aprobación de la Superintendencia de Riesgos del Trabajo, por lo que no se efectúan modificaciones y/o agregados en los mismos.',
        },
        {
          id: 14,
          title: '¿Dónde puedo consultar\nmi Estado de Cuenta?',
          body:
            'Para consultar rápidamente el estado de su Contrato Tipo de Afiliación, ponemos a disposición ART MUTUAL RURAL (link) on-line, una herramienta que le permitirá ver el detalle de cuotas, períodos devengados, alícuotas, premios, pagos, intereses y saldos de períodos adeudados, ingresando a nuestra página web https://www.artmutualrural.com.ar.\n\nAsimismo, Ud. podrá evacuar las consultas de facturación y cobranzas que tenga en relación a este capítulo a través de los siguientes medios de contacto:\nEnviando un e-mail a (link)\nContactándose telefónicamente al 0800- (Agregar tel de atención al cliente)',
        },
        {
          id: 15,
          title:
            '¿Cuáles son los exámenes médicos\nlaborales obligatorios? (Res. 37/10)',
          body:
            'Los exámenes preocupacionales o de ingreso:\n\nSu realización es obligatoria y están a cargo del empleador, debiendo efectuarse de manera previa al inicio de la relación laboral. Tienen como propósito evaluar la aptitud del postulante conforme sus condiciones psicofísicas para el desempeño de las actividades que se le requerirán. Los contenidos de estos exámenes serán, como mínimo, los del ANEXO I de la RES 37/10. En caso de preverse la exposición a los agente de riesgo del Decreto N° 658/96 deberán, además, efectuarse los estudios correspondientes a cada agente, detallados en el ANEXO II.\n\nLos exámenes médicos periódicos:\n\nTienen por objetivo la detección precoz de afecciones producidas por aquellos agentes de riesgo determinados por el Decreto N° 658/96 a los cuales el trabajador se encuentre expuesto con motivo de sus tareas, con el fin de evitar el desarrollo de enfermedades profesionales.',
        },
        {
          id: 16,
          title: '¿Cuáles son los exámenes\nmédicos laborales optativos?',
          body:
            'De acuerdo a la RES 37/10, los exámenes previos a la transferencia de actividad:\n\nCuando el cambio de tareas conlleve el cese de la eventual exposición a los agentes de riesgo antes mencionados, el examen previsto en este artículo tendrá carácter optativo. La realización de este examen será, en este supuesto, responsabilidad de la Aseguradora o empleador autoasegurado.\n\nExámenes posteriores a ausencias prolongadas:\n\nLos exámenes posteriores a ausencias prolongadas tienen como propósito detectar las patologías sobrevenidas durante la ausencia.' +
            'Sólo podrán realizarse en forma previa al reinicio de las actividades del trabajador.' +
            'La realización de estos exámenes, de carácter optativo, serán responsabilidad de la Aseguradora sin perjuicio de que la Aseguradora pueda convenir con el empleador su realización.' +
            'Los exámenes de egreso:\n\n' +
            'Tienen como propósito comprobar el estado de salud frente a los elementos de riesgo a los que hubiere sido expuesto el trabajador al momento de la desvinculación.' +
            'Estos exámenes permitirán el tratamiento oportuno de las enfermedades profesionales, al igual que la detección de eventuales secuelas incapacitantes.' +
            'Se llevarán a cabo entre los diez (10) días anteriores y los treinta (30) días posteriores a la terminación de la relación laboral.' +
            'Tienen carácter optativo y serán responsabilidad de la Aseguradora sin perjuicio de que la Aseguradora pueda convenir con el empleador su realización.' +
            'Revisten el carácter de obligatorios en todos los casos en que exista exposición a los agentes de riesgo antes mencionados, debiendo efectuarse con las frecuencias y contenidos mínimos indicados en el ANEXO II de la Resolución c, incluyendo un examen clínico.' +
            'La responsabilidad de realizarlos está a cargo de la Aseguradora, sin perjuicio de que pueda convenir con el empleador su realización.' +
            'Los exámenes previos a la transferencia de actividad:\n\n' +
            'Los exámenes previos a la transferencia de actividad tienen, en lo pertinente, los objetivos indicados para los exámenes de ingreso y de egreso. Es obligatoria la realización de exámenes previos a la transferencia de actividad toda vez que dicho cambio indique el comienzo de una eventual exposición a uno o más agentes de riesgo determinados por el Decreto N° 658/96, no relacionados con las tareas anteriormente desarrolladas. La realización de estos exámenes será, en este supuesto, responsabilidad del empleador, y deberán realizarse antes del cambio efectivo de las tareas. Los contenidos del examen serán, como mínimo, los indicados en el ANEXO II de la Resolución 37/10.',
        },
        {
          id: 17,
          title:
            '¿Qué normas mínimas de seguridad\ne higiene se deben cumplir?',
          body:
            'La Ley 19.587/72 de Higiene y Seguridad y sus decretos reglamentarios han establecido para las empresas la obligación legal (conforme a la actividad que desarrollan y la cantidad de trabajadores que emplean) de contratar un ingeniero calificado que brinde el Servicio de Higiene y Seguridad en el Trabajo.\n\n' +
            'Decreto 351/79. Detalle de las medidas de seguridad que los establecimientos deberán tomar en relación a características constructivas, condiciones de higiene en los ambientes laborales, protección personal del trabajador, estadísticas de accidentes y enfermedades del trabajo. Se amplían como anexos los siguientes temas: carga térmica, iluminación, color, ruidos y vibraciones, instalaciones eléctricas, protección contra incendios.\n\n' +
            'Decreto 911/96. Adapta las normas establecidas por el Decreto 351, estableciendo obligaciones específicas para la industria de la construcción.\n\n' +
            'Decreto 1338/96: Fija la misión fundamental del Servicio de Higiene y Seguridad como tendiente a determinar, promover y mantener adecuadas condiciones ambientales en los lugares de trabajo. Indica la cantidad de horas profesionales mínimas obligatorias para el Servicio de Higiene y Seguridad y el Servicio de Medicina Laboral.\n\n' +
            'Decreto 617/97: Establece el "Reglamento de Higiene y Seguridad para la Actividad Agraria".',
        },
        {
          id: 18,
          title:
            '¿Qué empresas están obligadas\na contar con un servicio de higiene\ny seguridad en el trabajo?',
          body:
            'Todas las empresas deberán contar, por sí o a través de la contratación de un tercero, con un servicio brindado por profesionales técnicos calificados con el fin de dar cumplimiento a las normas de Higiene y Seguridad en el Trabajo.\n\n' +
            'Según el Art. 14 del Decreto 1.338/96, quedan exceptuadas de la obligación de tener asignación de profesionales técnicos en higiene y seguridad las siguientes entidades:\n\n' +
            'Los establecimientos dedicados a la agricultura, caza, silvicultura y pesca, que tengan hasta 15 trabajadores permanentes.\n' +
            'Las explotaciones agrícolas por temporada.\n' +
            'Los establecimientos dedicados exclusivamente a tareas administrativas de hasta 200 trabajadores.\n' +
            'Los establecimientos donde se desarrollen tareas comerciales o de servicios de hasta 100 trabajadores, siempre que no se manipulen, almacenen o fraccionen productos tóxicos, inflamables, radioactivos o peligrosos para el trabajador.\n' +
            'Los servicios médicos sin internación.\n' +
            'Los establecimientos educativos que no tengan talleres.\n' +
            'Los talleres de reparación de automotores que empleen hasta 5 trabajadores equivalentes.\n' +
            'Los lugares de esparcimiento público que no cuenten con áreas destinadas al mantenimiento, de menos de 3 trabajadores.',
        },
        {
          id: 19,
          title: '¿Qué hacer en caso de\naccidente laboral leve?',
          body:
            'Ante esta situación deberán comunicarse al Tel: 0800- (TEL CECAP) las 24 hs. los 365 días del año, donde recibirán instrucciones sobre los pasos a seguir según el estado del accidentado.',
        },
        {
          id: 20,
          title: '¿Qué hacer en caso de\naccidente laboral grave?',
          body:
            'Ante cualquier accidente en el que se considere que existe riesgo inmediato para la vida del accidentado o necesite urgente atención médica, debe comunicarse directamente al Servicio de Emergencias Médicas 0800- (TEL CECAP)',
        },
        {
          id: 21,
          title: '¿Qué hacer en caso de reagravación?',
          body:
            'En ese caso se deberá actuar como si fuera un siniestro nuevo (aclarando que es una reagravación* de un siniestro anterior- detallar nro. de caso y/o fecha de PMI), efectuando una nueva denuncia dentro de las 24hs.. La fecha del siniestro debe ser la de la reagravación.\n\n' +
            'En todos los casos, al reingresar el trabajador a sus tareas, el mismo deberá presentar la Constancia de Solicitud de Reingreso y la Constancia de Alta Médica/Fin de Tratamiento - según correspondiera, que documentan el momento y las características del retorno a la actividad.\n\n' +
            '(*) Reaparición de la dolencia del siniestro original',
        },
        {
          id: 22,
          title:
            '¿Qué debe hacer un empleado ante un\naccidente fuera del ámbito laboral?',
          body:
            'De permitirlo su estado de salud, deberá concurrir a su empresa y pedir a su superior una Solicitud de Atención Médica, y éste le indicará el lugar al cual debe dirigirse para su atención. De no ser posible llegar a su empresa, deberá comunicarse al 0800-(TEL CECAP), o dirigirse a alguno de los Centros Médicos que se encuentran en la cartilla de prestadores médicos de ART MUTUAL RURAL.\n\n' +
            'Deberá tener siempre a mano su Credencial de ART MUTUAL RURAL y anotar las direcciones de los centros de atención más cercanos a su domicilio y a su lugar de trabajo. Ante un accidente "in itinere", deberá realizar la correspondiente denuncia policial.',
        },
        {
          id: 23,
          title: '¿Cuál es el procedimiento\npara Reintegro de Gastos Médicos?',
          body:
            'De acuerdo a la Ley 24.557, art 43, solo se reconocerán prestaciones a partir del momento en que la Aseguradora tome conocimiento de la ocurrencia del accidente.\n\n' +
            'Los accidentes de trabajo y enfermedades profesionales deberán ser atendidos siempre en un prestador médico de la red de ART MUTUAL RURAL. \n\n' +
            'Si por algún motivo excepcional un trabajador accidentado hubiera recibido asistencia por fuera de la red de prestadores y éstos fueran autorizados o reconocidos por ART MUTUAL RURAL, para solicitar su reintegro deberá \n\n' +
            'Integrar todos los datos requeridos en el formulario de Solicitud de Reintegro.(link formulario)\n' +
            'Consignar en el apartado de "Domicilio para devolución de esta documentación" el domicilio y el teléfono del solicitante del reintegro donde ART MUTUAL RURAL  pueda enviar documentación y/o información en el caso que el trámite sea observado.\n' +
            'Indicar Tipo de pago solicitado: transferencia bancaria o pago por ventanilla banco (solo personas físicas no jurídicas)\n' +
            'La cuenta bancaria deberá pertenecer al empleado accidentado o a la empresa empleadora.\n' +
            'Los reintegros por gastos de sepelio podrán ser presentados por los familiares y/o el empleador sin más.\n' +
            'El importe declarado en la solicitud de reintegro deberá ser igual a la suma de los comprobantes presentados.\n' +
            'La solicitud deberá estar acompañada de Factura (Tipo B ó C ó Comprobante fiscal) o Recibo de Pago Original. Esta deberá contener los datos del empleado/accidentado (nombre y apellido, y DNI o CUIL), un detalle discriminado y valorizado individualmente de cada prestación con sus fechas de realización.\n\n' +
            'Además, según el tipo de prestación, deberá tener adjunta la siguiente documentación:\n\n' +
            'Honorarios médicos:\n\n' +
            'Evolución médica y/o protocolo de tratamiento (parte de cirugía, parte de anestesia, parte de monitoreo, etc.) firmado y sellado por el profesional interviniente.\n\n' +
            'Prácticas Odontológicas:\n\n' +
            'Odontograma completo, indicando la pieza a tratar.\n\n' +
            'Exámenes Complementarios:\n\n' +
            'Laboratorio, radiología, prácticas de mediana o alta complejidad, tratamientos de rehabilitación.\n' +
            'Prescripción médica.\n' +
            'Informe o protocolo con fechas de realización, resultado y firma de conformidad por parte del siniestrado.\n\n' +
            'Internación:\n\n' +
            'Copia de Historia Clínica que deberá contener como mínimo:\n' +
            'Informe de Hospitalización.\n' +
            'Informe de Alta (Epicrisis).\n' +
            'Hoja de Indicaciones Médicas.\n' +
            'Hoja de Evolución Médica.\n' +
            'Anamnesis.\n' +
            'Hoja de Enfermería. (No excluyente).\n' +
            'Hoja de Controles y Suministros. (No excluyente).\n' +
            'Protocolo de Cirugía. (solamente para casos quirúrgicos).\n' +
            'Protocolo de Anestesia. (solamente para casos quirúrgicos).\n' +
            'Protocolo de Monitoreo. (solamente para casos quirúrgicos).\n' +
            'Informes de Prácticas de Diagnóstico. (No excluyente).\n\n' +
            'Medicamentos Ambulatorios:\n\n' +
            'Prescripción médica firmada y sellada por el profesional interviniente con datos filiatorios del accidentado (apellido y nombre, tipo y nro. de documento) y troqueles (que deben coincidir con el / los medicamentos solicitados).\n\n' +
            'Traslados (remis, ambulancia o U.T.I.M.):\n\n' +
            'Voucher con datos del traslado (tipo de traslado, origen y destino del traslado, tiempo de espera, cantidad de kilómetros, etc.) firmado por el accidentado o acompañante.\n\n' +
            'Gastos de Sepelio:\n' +
            'Certificado de defunción.\n' +
            'Factura Original del servicio de Sepelio.\n' +
            'Comprobante de CBU (La cuenta debe estar a nombre de quien solicita el reintegro).\n' +
            'La documentación completa deberá ser remitida a DOMICILIO DE LA ART Ciudad Autónoma de Buenos Aires, colocando en el sobre "Solicitud de Reintegro de Gastos Médicos" At: Liquidación de Prestaciones Médicas ART e indicando remitente.\n\n' +
            'El plazo de pago para los reintegros de gastos médicos es de 10 días hábiles a contar desde el momento en que se recibe la documentación detallada (en su totalidad y debidamente conformada) en la Mesa de Entradas de ART MUTUAL RURAL\n' +
            'Por seguimiento de estado / situación de reintegro, contactarse con Atención al cliente al 0-800- ATENCION AL CLIENTE, o por e-mail a clientes@ARTMUTUALRURAL.',
        },
        {
          id: 24,
          title: '¿Qué son las prestaciones dinerarias?',
          body:
            'Son pagos mensuales que deben efectuar la ART mientras el damnificado no pueda trabajar, por el tiempo que corresponda y en la cantidad adecuada, en caso de accidente o enfermedad profesional. En los casos que corresponda, la ART debe pagar también una indemnización.\n\n' +
            'Estos pagos se determinan según el tipo de incapacidad, y tienen como finalidad reparar los daños causados.\n\n' +
            'Estas prestaciones son irrenunciables y poseen carácter alimentario, no pudiendo ser cedidas ni enajenadas por sus beneficiarios. Las prestaciones dinerarias varían según el grado de incapacidad del trabajador (parcial -leve o grave- y total) y su carácter (temporaria, provisoria o permanente). Pueden presentarse las siguientes situaciones:\n\n' +
            'Incapacidad laboral temporaria, se produce cuando un trabajador se encuentra accidentado o padece una enfermedad profesional, y el daño sufrido le impide la realización de sus tareas habituales.\n' +
            'Incapacidad laboral permanente. Es la situación en que luego de haber estado sometido a tratamiento médico por la mutual, el trabajador presenta una disminución de su capacidad laboral de forma permanente. Cuando la incapacidad permanente es menor a 66%, se considera de grado parcial y cuando la incapacidad permanente es mayor o igual a 66%, es de grado total.\n' +
            'Gran invalidez. Se trata de la incapacidad laboral permanente total, en la que el trabajador afectado necesita de la asistencia continua de otra persona. Esta prestación cesa con el fallecimiento del accidentado.\n' +
            'Fallecimiento. Las prestaciones son las mismas que en el caso de incapacidad laboral permanente definitiva total, y en este caso los beneficiarios son los derechohabientes, en los términos del Art 53 Ley 24241.',
        },
        {
          id: 25,
          title: '¿Qué es la ILT?',
          body:
            'La Incapacidad Laboral Temporaria se produce cuando un trabajador se encuentra accidentado o padece una enfermedad profesional, y el daño sufrido le impide la realización de sus tareas habituales. . Se trata de un impedimento transitorio que tiene una duración máxima de 24 meses contados desde la producción del accidente, o desde la primera manifestación invalidante de la enfermedad.\n\n' +
            'La ley sobre Riesgos del Trabajo N° 24.557 establece cuatro causas por las cuales cesa la situación de ILT 1- Alta médica 2- Determinación de incapacidad laboral permanente 3- Transcurso de un año desde la PMI 4- Muerte del trabajador\n\n' +
            'El obligado al pago deberá abonar una prestación dineraria de cuantía y condiciones iguales a la que efectivizaba en concepto de Incapacidad Laboral Temporaria. Durante esta última etapa, el trabajador no devengará remuneraciones de su empleador. Dicho período podrá ser reducido si con anterioridad se hubiese sustanciado el trámite pertinente para establecer la Incapacidad Laboral Permanente ante los organismos competentes.\n\n' +
            'En este período el trabajador percibe una prestación de pago mensual equivalente al ingreso base mensual que no tiene carácter remuneratorio.\n\n' +
            'Durante los diez primeros días, contados a partir del día siguiente de la fecha de primera manifestación invalidante, el pago de la incapacidad laboral temporaria está a cargo del empleador. A partir del día undécimo día está a cargo de la A.R.T.\n\n' +
            'Una vez finalizado el periodo de ILT, si el trabajador presentara secuelas incapacitantes, la ART deberá presentar el trámite ante las Comisiones Medicas SRT a fin de que este organismo determine la incapacidad permanente del accidentado.\n\n',
        },
        {
          id: 26,
          title: '¿Cómo calcular el monto a pagar por ILT?',
          body:
            'La prestación dineraria durante una Incapacidad Laboral Temporaria se calcula conforme a las pautas dispuestas por el artículo 208 de la Ley de Contrato de Trabajo N° 20.744 (t.o. 1976) y sus modificatorias, incluye la totalidad de los conceptos que debió percibir el damnificado al momento de la primera manifestación invalidante, sin tener en cuenta el tope máximo de remuneraciones sujetas a aportes que estipula la ley previsional.\n\n' +
            'Si el salario estuviere integrado por remuneraciones variables, se liquidará según el promedio de lo percibido en el último semestre de prestación de servicios. La prestación dineraria se debe ajustar conforme a los aumentos que durante el período de interrupción fueren acordados a los de su misma categoría por aplicación de una norma legal, convención colectiva de trabajo o decisión del empleador.\n\n' +
            'Este tipo de compensación económica se encuentra exenta del Impuesto a las Ganancias.',
        },
        {
          id: 27,
          title: '¿Cómo proceder para el\nreintegro de prestaciones?',
          body:
            'Durante el período en que el trabajador se encuentra imposibilitado de prestar servicios a su empleador, percibirá una prestación por Incapacidad Laboral Temporaria (I.L.T.). El pago de los 10 primeros días, a contar desde el día siguiente al de producida la contingencia, estará a cargo del empleador. A partir del décimo segundo día, ART MUTUAL RURAL asume el pago de la misma y de las correspondientes contribuciones patronales.\n\n' +
            'El empleador deberá efectuar los pagos al trabajador de acuerdo a su periodicidad habitual de liquidación y efectuar las correspondientes Contribuciones Patronales y Retenciones. Para solicitar el reintegro, el empleador deberá completar y enviar la documentación detallada en el instructivo de reintegros de ILT que se encuentra publicado en ENLACE REINTREGROS ILT \n\n' +
            'ART MUTUAL RURAL procederá al reintegro de dichas sumas dentro de los treinta (30) días contados a partir de la fecha en que se recibe la documentación completa.\n\n' +
            'La documentación correspondiente se podrá enviar a nuestra casilla MAIL REINTEGROS entregar en nuestra red de sucursales, o enviar por correo a DOMICILIO ART (CABA) C…AAB.\n\n' +
            'Documentación a presentar para percibir el Reintegro:\n\n' +
            'Consideraciones particulares:\n\n' +
            '1.	SAC: La prestación dineraria que se devengue deberá incluir la parte proporcional del SAC. Por lo tanto, ART MUTUAL RURAL incluirá en cada pago el 8,33% del SAC, de la totalidad de los Conceptos Remunerativos. En caso que los haberes NO Remunerativos devenguen SAC, el empleador deberá adjuntar el correspondiente acuerdo salarial.\n' +
            '2.	Aumento de Salarios: Con el fin de dar cumplimiento a la normativa, se solicita a la empresa cliente que informe a la aseguradora de los aumentos de salarios que se otorguen a los trabajadores que se encuentren bajo ILT, ya sea por Convenio Colectivo o voluntarios del Empleador. Dicha información puede realizarse mediante nota o mail, adjuntando el correspondiente acuerdo salarial.\n' +
            '3.	Plazos de Reintegro: El plazo de reintegro es de 30 días, contados a partir de la fecha en que se recibe la documentación completa. La documentación de reintegros de ILT se puede enviar por e-mail a nuestra casilla    ENLACE MAIL REINTEGROS, entregar en nuestra red de sucursales, o enviar por correo a DOMICILIO ART (CABA) C…AAB\n' +
            'Ante cualquier consulta, se podrá contactar con nuestro Centro de Atención al Cliente, llamando en forma gratuita al 0800-ATENCIÓN AL CLIENTE, o por e-mail a e-mail atención al cliente ',
        },
        {
          id: 28,
          title:
            '¿Se puede solicitar Pago directo al\ntrabajador en concepto de\nIncapacidad Laboral Temporaria?',
          body:
            'Sí. Cuando un trabajador se encuentre en período de Incapacidad Laboral Temporaria, y se produzca su desvinculación laboral, el empleador/trabajador podrá solicitar a ART MUTUAL RURAL el Pago Directo al Beneficiario presentando la siguiente documentación:\n\n' +
            'Carta solicitando pago directo con datos del siniestro: Datos de trabajador, N° de caso, fecha de ocurrencia.\n' +
            'Telegrama de despido o renuncia.\n' +
            'Copia de los recibos de sueldo de los 6 meses anteriores al mes del accidente, y recibo de liquidación final. En caso de que el siniestro haya ocurrido el mismo mes de inicio de la relación laboral o el accidentado tenga menos de 6 meses de antigüedad, deberá adjuntar el recibo de del mes del accidente.\n' +
            'Si el trabajados realiza trabajos de temporada o eventuales deberá presentar recibo de ajuste de producción y un detalle donde quede perfectamente detallado inicio y fin del periodo de trabajo en donde ocurrió el accidente.\n' +
            'Comprobante de CBU del trabajador para el depósito en cuenta.\n' +
            'En los casos que el damnificado haya perdido el vínculo laboral con el empleador por cualquier causa, para los aumentos se deben tener en cuenta los incrementos que se estipulen semestralmente para los topes mínimos y máximos previsionales (ajuste SIPA).',
        },
        {
          id: 29,
          title: '¿Cuándo existe una\nIncapacidad Laboral Permanente?',
          body:
            'Cuando el daño sufrido por el trabajador le ocasiona una disminución de su capacidad laboral en forma permanente. Finalizada la etapa de incapacidad laboral temporaria, ya sea por otorgamiento de Alta Médica con incapacidad o por cumplimiento del plazo de ILT para un caso que pudiera finalizar con incapacidad (1 año máximo para casos cuya primera manifestación invalidante sea anterior al 26/10/2012 o 2 años máximo para casos cuya primera manifestación invalidante sea 26/10/2012 y posteriores), se procederá a la presentación del caso ante las Comisiones Medicas de la SRT, único organismo facultado para determinar el porcentaje de disminución de la incapacidad laboral.\n\n' +
            'De considerar las Comisiones Medicas que el accidentado posee una Incapacidad Laboral Permanente Definitiva, emitirá un dictamen para el accidentado y otro para la ART, que tendrá 15 días (hábiles para casos cuya (PMI) ocurriera con anterioridad a la entrada en vigencia de la Nueva Ley 26773 / corridos para casos cuya (PMI) ocurriera con posterioridad a la entrada en vigencia de la Nueva Ley 26773) para poner a disposición y abonar el dictamen a favor del accidentado.',
        },
        {
          id: 30,
          title: '¿Qué es la Incapacidad\nLaboral Permanente Provisoria?',
          body:
            'En los casos cuya Primera Manifestación Invalidante (PMI) ocurriera con anterioridad a la entrada en vigencia de la Nueva Ley 26773 (modificatoria de la Ley 24.557), al momento de ser evaluado el accidentado en los términos del punto anterior, si la SRT considerara que es posible una mejoría a favor del accidentado a través de tratamiento médico, podrá otorgar Incapacidad Permanente Parcial Provisoria que durará 36 meses para las incapacidades parciales (plazo extensible por la SRT a 60 meses al momento de finalización del plazo) o de 60 meses para las incapacidades totales.',
        },
        {
          id: 31,
          title: '¿Qué es la Gran Invalidez?',
          body:
            'Se considera que un trabajador está en situación de Gran Invalidez cuando tiene una Incapacidad Laboral Permanente Total y necesita la asistencia continua de otra persona para realizar los actos elementales de la vida.\n\n' +
            'La Ley N° 26773, establece  que independientemente de la fecha de la PMI, los damnificados deben percibir en forma mensual la suma de $2.000 (Decreto N°1694/09), actualizada en la misma proporción en que lo sean las prestaciones del Sistema Integrado Previsional Argentino (SIPA), de acuerdo a lo dispuesto en el artículo 32 de la Ley N°24.241, modificado por su similar N° 26.417.',
        },
        {
          id: 32,
          title:
            '¿Qué documentación es obligatoria para\nel pago de la prestación dineraria?',
          body:
            'Obligación del Empleador:\n\n' +
            'Certificación de Remuneraciones debidamente certificada. Si el accidentado tuviera antigüedad mayor al año: recibos de sueldo de los 12 meses anteriores a la fecha del siniestro (en los casos de trabajadores sujetos a variables por producción deberá presentar el recibo de ajuste de producción del periodo trabajado en que ocurriera el siniestro). Si el accidentado tuviera antigüedad menor al año: recibos de sueldo de los meses trabajados incluyendo el mes del siniestro (en los casos de trabajadores sujetos a variables por producción deberá presentar el recibo de ajuste de producción del periodo trabajado en que ocurriera el siniestro).\n\n' +
            'Obligación de los Derechohabientes:\n\n' +
            'A los efectos de acreditar la calidad de derechohabientes conforme lo establecido en el Art. 53 de la ley 24.241 y sus decretos reglamentarios, deberá remitir a ésta aseguradora la siguiente documentación:\n\n' +
            'Fotocopia legalizada de 1° y 2° hoja del DNI de esposa/o o concubina/o;\n' +
            'Fotocopia legalizada de Partida de nacimiento y fotocopia legalizada de 1° y 2° hoja de DNI correspondiente a los hijos menores de 21 años; y/o menores de 25 años a cargo exclusivo del trabajador fallecido;\n' +
            'Fotocopia legalizada del Acta de Matrimonio emitida por registro civil con fecha posterior al fallecimiento o sentencia sumaria (civil) que acredite el concubinato;\n' +
            'Constancia de alumno regular emitido por organismo oficial reconocido por autoridad competente; en caso de hijos mayores de 21 años y menores de 25 años, los cuales fueran estudiantes a cargo exclusivo del trabajador fallecido.\n' +
            'Fotocopia de los recibos de sueldo correspondientes a los últimos 12 meses o del período trabajado en caso de ser menor.\n' +
            'Fotocopia legalizada de la partida de defunción.\n' +
            'Factura y/o recibo original que acredite el pago de los gastos de sepelio, para su posterior reintegro.\n\n' +
            'En caso que los derechohabientes fueran los padres del trabajador fallecido, deberán remitir fotocopia legalizada de la siguiente documentación:\n\n' +
            'Partida de nacimiento del trabajador fallecido;\n' +
            'Acta de matrimonio de los padres y 1° y 2° hoja del DNI de cada uno de los progenitores;\n' +
            'Partida de defunción;\n' +
            'En caso que el solicitante invoque que se encontraba a cargo del trabajador fallecido deberá presentar "Información Sumaria Judicial" la cual obligatoriamente deberá darse intervención a la ANSES y demás terceros interesados, que acredite la escasez o carencia de recursos personales y que la falta de contribución importa un desequilibrio esencial en su economía particular.\n\n' +
            'Certificado de supervivencia de los derechohabientes.\n' +
            'La copia de la documentación que debe presentar el derechohabiente deberá estar certificada por autoridad competente, Juez de Paz o Escribano Público (en este último caso la firma del escribano deberá además estar certificada por el Colegio de Escribanos).',
        },
        {
          id: 33,
          title: '¿Cuáles son las características\ndel servicio de sepelio?',
          body:
            'ART MUTUAL RURAL brinda el servicio en forma directa por intermedio de sus prestadores o bien actúa por reintegro. \n\n' +
            'El monto del reintegro se ajustará a los límites determinados por la normativa vigente y se hará efectivo una vez recibidos los comprobantes correspondientes. Resolución SRT 1195/04 Art. 8°. En aquellos casos en que la aseguradora o el empleador autoasegurado no se hubiera responsabilizado de los trámites y costos del servicio funerario y el gasto hubiera sido cubierto por algún sistema que implique el pago adelantado, por parte del fallecido o el grupo familiar, de sumas para la previsión de esta eventualidad, la aseguradora o el empleador autoasegurado procederán a poner a disposición de los derechohabientes, la suma de DIECINUEVE (19) MOPRES. Una vez determinada la naturaleza laboral del siniestro y finalizada la verificación de las condiciones exigidas por la normativa vigente, esta aseguradora iniciará el trámite de liquidación de la prestación pertinente.',
        },
      ],
      itemActivo: 0,
    };
  }

  //Funciones
  updateItemActivo = itemActivo => {
    console.log('itemActivo: ' + itemActivo);
    if (itemActivo === this.state.itemActivo) {
      this.setState({itemActivo: 0});
    } else {
      this.setState({itemActivo});
    }
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        height: '100%',
        alignSelf: 'stretch',
      },
      main: {
        backgroundColor: '#83BC00',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#83BC00',
        width: '90%',
        marginLeft: 20,
        //height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginTop: 2,
        padding: 7,
      },
      mainBody: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
      },
      header: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
      },
      headerText: {
        color: 'white',
        fontSize: 18,
        width: '100%',
        textAlign: 'left',
      },
      bodyText: {
        color: 'white',
        fontSize: 16,
        width: '90%',
        backgroundColor: 'green',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 20,
        marginLeft: 20,
      },
    });

    return (
      <>
        <Titulo titulo="Preguntas Frecuentes" />
        <Emergencia backgroundColor="white" />
        <ScrollView style={styles.container}>
          {this.state.preguntas
            ? this.state.preguntas.map((param, i) => {
                return (
                  <>
                    <View style={styles.main}>
                      <TouchableOpacity
                        onPress={() => this.updateItemActivo(param.id)}>
                        <Text style={styles.headerText}>{param.title}</Text>
                      </TouchableOpacity>
                    </View>

                    {this.state.itemActivo === param.id ? (
                      <View style={styles.mainBody}>
                        <Text style={styles.bodyText}>{param.body}</Text>
                      </View>
                    ) : null}
                  </>
                );
              })
            : null}
        </ScrollView>
      </>
    );
  }
}
