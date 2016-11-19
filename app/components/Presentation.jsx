/**
 * barcamp-redux | Presentation.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import Anime from 'react-anime';
import SimpleSlide from './SimpleSlide';
import ImageSlide from './ImageSlide';
import ListImageSlide from './ListImageSlide';
import ListSlide from './ListSlide';
import CounterSlide from './CounterSlide';
import CodeSlide from './CodeSlide';
import DevTools from '../containers/DevTools';

let styles = {};

class Presentation extends Component {
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
    this.goToSlide(1);
    document.addEventListener('keydown', e => this.handleKeyboardEvent(e), false);
  }


  /**
   * Español:
   * Parte del ciclo de vida de un componente de React, este método es llamado
   * justo antes de nuestro componente recibir nuevas propiedades.
   *
   * English:
   * Part of a React's component lifecycle, this method is called
   * just before our component receives new props.
   *
   * @param {Object} newProps - Nuevas propiedades | New props.
   */
  componentWillReceiveProps(newProps) {
    const { step } = newProps;
    localStorage.setItem('CURRENT_SLIDE', step);
  }


  /**
   * Español:
   * Genera un objeto con los estilos para el contenedor de los slides.
   *
   * English:
   * Generate an object with the slides container styles.
   *
   * @returns {Object} Objeto de estilo | Style object.
   */
  getContainerStyle() {
    const { background } = this.props.currentSlide;

    return {
      display: 'flex',
      backgroundImage: background && `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${background}')`,
      backgroundSize: 'cover',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100vw',
      height: '100vh',
    };
  }


  /**
   * Español:
   * Genera un objeto con los estilos para el contenido,
   * basado en el tipo de slide actual.
   *
   * English:
   * Generate an object with the slides content styles,
   * based on the current slide type.
   *
   * @returns {Object} Objeto de estilo | Style object.
   */
  getContentStyle(currentSlide) {
    switch (currentSlide.type) {
      case 'simple':
        return styles.simpleSlideContent;
      default:
        return styles.simpleSlideContent;
    }
  }


  /**
   * Español:
   * Navega hacia el slide perteneciente al número recibido.
   *
   * English:
   * Navigates to the slide belonging to the received number.
   *
   * @param {Number} slideNumber - Número del slide requerido | Requested slide number.
   */
  goToSlide(slideNumber) {
    const { totalSlides, actions } = this.props;

    if (slideNumber > 0 && slideNumber <= totalSlides) {
      actions.getSlide(slideNumber);
    }
  }


  /**
   * Español:
   * Usa las flechas del teclado para navegar por los slides.
   *
   * English:
   * Use arrow keys to navigate through the slides.
   *
   * @param {Object} event - Evento keydown | keydown event.
   */
  handleKeyboardEvent(event) {
    const { step } = this.props;

    if (event.key === 'ArrowRight') {
      this.goToSlide(step + 1);
    } else if (event.key === 'ArrowLeft') {
      this.goToSlide(step - 1);
    }
  }


  /**
   * Español:
   * Retorna el componente necesario para renderizar el slide actual,
   * basado en su tipo.
   *
   * English:
   * Returns the component needed to render the current slide,
   * based on its type.
   *
   * @param {Object} currentSlide - Slide actual | Current slide.
   * @returns {Object} Componente React | React component.
   */
  renderSlide(currentSlide) {
    const { counter, actions } = this.props;

    switch (currentSlide.type) {
      case 'simple':
        return <SimpleSlide slide={currentSlide} />;
      case 'image':
        return <ImageSlide slide={currentSlide} />;
      case 'listImage':
        return <ListImageSlide slide={currentSlide} />;
      case 'list':
        return <ListSlide slide={currentSlide} />;
      case 'counter':
        return <CounterSlide counter={counter} actions={actions} />;
      case 'code':
        return <CodeSlide slide={currentSlide} counter={counter} actions={actions} />;
      default:
        return <div>Oops...</div>;
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
    const { currentSlide } = this.props;

    return (
      <div style={this.getContainerStyle()}>
        <DevTools />
        <Anime
          easing="linear"
          duration={125}
          direction="alternate"
          scale={[1, 1.025]}
        >
          <div style={this.getContentStyle(currentSlide)}>
            {this.renderSlide(currentSlide)}
          </div>
        </Anime>
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
Presentation.propTypes = {
  currentSlide: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  totalSlides: React.PropTypes.number.isRequired,
  counter: React.PropTypes.number,
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
  simpleSlideContent: {
    width: '50vw',
    margin: '0 auto',
    overflow: 'hidden',
  },
};

export default Presentation;
