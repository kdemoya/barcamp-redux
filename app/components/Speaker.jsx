/**
 * barcamp-redux | Speaker.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import Anime from 'react-anime';

let styles = {};

class Speaker extends Component {
  /**
   * Español:
   * Parte del ciclo de vida de un componente de React, este método es llamado
   * justo antes de renderizar nuestro componente.
   * En esta ocasión lo usamos para inicializar nuestro componente y sus eventos.
   *
   * English:
   * Part of a React's component lifecycle, this method is called
   * just before our component renders.
   * In this occasion we use it to initialize our component and its events.
   */
  componentWillMount() {
    window.addEventListener('storage', e => this.handleSlideChange(e));
  }


  /**
   * Español:
   * Maneja los cambios al almacenamiento local del nuestro navegador,
   * los cuales son actualizados por nuestro componente principal (Presentation.jsx),
   * actualiza el estado actual basado en el último slide guardado en el almacenamiento local.
   *
   * English:
   * Handles the changes of the browser's local storage,
   * which are triggered by out main component (Presentation.jsx),
   * updates the current state based on the last value saved to the local storage.
   *
   * @param {String} event - Slide del almacenamiento local | Local storage's slide.
   */
  handleSlideChange(event) {
    const { actions } = this.props;
    const { newValue } = event;

    actions.getSlide(parseInt(newValue, 10));
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
    const { currentSlide, step, totalSlides } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.text}>
          <Anime
            easing="linear"
            duration={125}
            direction="alternate"
            scale={[1, 1.025]}
          >
            <span style={styles.progress}>{ step }/{ totalSlides }</span>
            <div style={styles.notes}>{ currentSlide.notes || 'There are no notes for this slide.' }</div>
          </Anime>
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
Speaker.propTypes = {
  currentSlide: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  totalSlides: React.PropTypes.number.isRequired,
  step: React.PropTypes.number.isRequired,
};


/**
 * Español:
 * Estilos para nuestro componente.
 *
 * English:
 * Styles for our component.
 */
styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#011627',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 72,
  },
  notes: {
    fontSize: 24,
    margin: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    width: '50vw',
    padding: '30px',
    borderTop: '1px solid #FFFFFF',
    borderBottom: '1px solid #FFFFFF',
  },
  progress: {
    position: 'absolute',
    right: 50,
    top: 50,
  },
};

export default Speaker;
