/**
 * barcamp-redux | SubHeader.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';

let styles = {};

class SubHeader extends Component {
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
    const { children } = this.props;

    return (
      <h2 style={styles.subHeader}>{children}</h2>
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
SubHeader.propTypes = {
  children: React.PropTypes.node.isRequired,
};


/**
 * Español:
 * Estilos para nuestro componente.
 *
 * English:
 * Styles for our component.
 */
styles = {
  subHeader: {
    color: '#FBFFFE',
    fontSize: '40px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    margin: '0',
  },
};

export default SubHeader;
