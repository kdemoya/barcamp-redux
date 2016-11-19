/**
 * barcamp-redux | CounterSlide.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';

let styles = {};

class CounterSlide extends Component {

  /**
   * Español:
   * Maneja el click en los botones de nuestro contador,
   * y decide si el contador debe aumentar o dismonuir.
   *
   * English:
   * Handles the click event of the buttons in our counter,
   * and decides if the counter should increase or decrease.
   *
   * @param {String} type - Acción a ejecutar | Action to execute.
   */
  handleClick(type) {
    const { actions } = this.props;

    switch (type) {
      case 'increase':
        actions.increaseCounter();
        return;
      case 'decrease':
        actions.decreaseCounter();
        return;
      default:
        return;
    }
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
    const { counter, dim } = this.props;

    return (
      <div style={dim === 'both' ? styles.dim : {}}>
        <span style={Object.assign({}, styles.number, dim === 'counter' ? styles.dim : {})}>
          {counter}
        </span>
        <div style={dim === 'controls' ? styles.dim : {}}>
          <button style={styles.button} onClick={() => this.handleClick('increase')}>+</button>
          <button style={styles.button} onClick={() => this.handleClick('decrease')}>-</button>
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
CounterSlide.propTypes = {
  actions: React.PropTypes.object.isRequired,
  counter: React.PropTypes.number.isRequired,
  dim: React.PropTypes.string,
};


/**
 * Español:
 * Estilos para nuestro componente.
 *
 * English:
 * Styles for our component.
 */
styles = {
  dim: {
    opacity: 0.4,
  },
  number: {
    display: 'block',
    fontSize: '50vh',
    lineHeight: '40vh',
    color: '#ffffff',
  },
  button: {
    width: '100px',
    height: '40px',
    border: '0',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    fontSize: 30,
    paddingTop: 0,
    margin: '0 5px',
    outline: 'none',
  },
};


export default CounterSlide;
