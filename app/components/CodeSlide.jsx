/**
 * barcamp-redux | CodeSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import HighLight from 'react-highlight';
import CounterSlide from './CounterSlide';

let styles = {};

class CodeSlide extends Component {
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
    const { slide, actions, counter } = this.props;

    return (
      <div style={styles.codeWrapper}>
        {actions &&
          <div style={styles.counter}>
            <CounterSlide counter={counter} actions={actions} dim={slide.dim} />
          </div>
        }
        <div style={styles.code}>
          <HighLight className="javascript">
            {slide.code}
          </HighLight>
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
CodeSlide.propTypes = {
  slide: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object,
  counter: React.PropTypes.number,
};


/**
 * Español:
 * Estilos para nuestro componente.
 *
 * English:
 * Styles for our component.
 */
styles = {
  codeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 24,
  },
  counter: {
    textAlign: 'center',
  },
};

export default CodeSlide;
