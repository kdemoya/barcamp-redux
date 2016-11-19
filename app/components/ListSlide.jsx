/**
 * barcamp-redux | ListSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class ListSlide extends Component {
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
    const { header, list } = this.props.slide;

    return (
      <div>
        { header && <Header>{header}</Header>}
        <List list={list} />
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
ListSlide.propTypes = {
  slide: React.PropTypes.object.isRequired,
};

export default ListSlide;
