/**
 * barcamp-redux | ListImageSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import List from './List';

let styles = {};

class ListImageSlide extends Component {
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
    const { header, subHeader, image, headerFit, list } = this.props.slide;

    return (
      <div>
        { header && <Header fit={headerFit}>{header}</Header> }
        { subHeader && <SubHeader>{subHeader}</SubHeader> }
        <div style={styles.wrapper}>
          <div>
            <img style={styles.image} src={image} alt="" />
          </div>
          <div style={styles.listWrapper}>
            <List list={list} />
          </div>
        </div>
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
ListImageSlide.propTypes = {
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
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    marginTop: '40px',
  },
  image: {
    maxWidth: '380px',
  },
  listWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignSelf: 'center',
    marginLeft: '40px',
  },
};

export default ListImageSlide;
