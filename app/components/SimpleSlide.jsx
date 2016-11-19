/**
 * barcamp-redux | SimpleSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import _ from 'lodash';
import Header from './Header';
import SubHeader from './SubHeader';

class SimpleSlide extends Component {
  /**
   * Español:
   * Retorna uno o varios componentes Header (encabezado) con el text recibido.
   *
   * English:
   * Returns one or several Header components with the received text.
   *
   * @param {Text|Array<Text>} header - Texto(s) del encabezado | Header's text(s).
   * @param {Boolean} fit             - Ajustar al tamaño del contenedor? | Fill container size?
   * @returns {Object} Componente React | React component.
   */
  renderHeader(header, fit) {
    if (_.isArray(header)) {
      return _.map(header, singleHeader => (
        <Header fit={fit}>{singleHeader}</Header>
      ));
    }

    return <Header fit={fit}>{header}</Header>;
  }


  /**
   * Español:
   * Parte del ciclo de vida de un componente de React, este método es llamado
   * para renderizar nuestro component.
   *
   * English:
   * Part of a React's component lifecycle, this method is called
   * to render our component.
   *
   * @returns {Object} Componente React | React component.
   */
  render() {
    const { header, subHeader, headerFit } = this.props.slide;

    return (
      <div>
        {this.renderHeader(header, headerFit)}
        {subHeader && <SubHeader>{subHeader}</SubHeader>}
      </div>
    );
  }
}


/**
 * Español:
 * Tipos de las propiedades de nuestro componente.
 *
 * English:
 * Types of our component props.
 */
SimpleSlide.propTypes = {
  slide: React.PropTypes.object.isRequired,
};

export default SimpleSlide;
