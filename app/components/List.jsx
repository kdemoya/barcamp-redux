/**
 * barcamp-redux | List.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import _ from 'lodash';

let styles = {};

class List extends Component {
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
    const { list } = this.props;

    return (
      <ul style={styles.list}>
        {_.map(list, item => <li>{item}</li>)}
      </ul>
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
List.propTypes = {
  list: React.PropTypes.array.isRequired,
};


/**
 * Español:
 * Estilos para nuestro componente.
 *
 * English:
 * Styles for our component.
 */
styles = {
  list: {
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'left',
  },
};

export default List;
