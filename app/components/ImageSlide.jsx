/**
 * barcamp-redux | ImageSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';

let styles = {};

class ImageSlide extends Component {
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
    const { image, header, subHeader, headerFit } = this.props.slide;

    return (
      <div>
        <img style={styles.image} src={image} alt="" />
        {header && <Header fit={headerFit}>{header}</Header>}
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
ImageSlide.propTypes = {
  slide: React.PropTypes.object.isRequired,
};


/**
 * Español:
 * Estilos para nuestro componente.
 *
 * English:
 * Styles for our component.
 */
styles = {
  image: {
    maxWidth: '100%',
    maxHeight: '510px',
    marginBottom: '20px',
  },
};

export default ImageSlide;
