/**
 * barcamp-redux | PresentationContainer.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as slideActions from '../actions/slide';

/**
 * Español:
 * Método de Redux para pasar estados como props a nuestro componente.
 *
 * English:
 * Redux method to pass states as props to our component.
 *
 * @param {Object} state - Estado global de Redux | Redux global state.
 * @returns {Object} Propiedades para el componente | Props for the component.
 */
function mapStateToProps(state) {
  return {
    currentSlide: state.currentSlide,
    totalSlides: state.totalSlides,
    step: state.step,
    counter: state.counter,
  };
}


/**
 * Español:
 * Método de Redux para pasar acciones como props a nuestro componente.
 *
 * English:
 * Redux method to pass actions as props to our component.
 *
 * @param {Function} dispatch - dispatcher the Redux | Redux's dispatcher.
 * @returns {Object} Acciones para el componente | Actions for the component.
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(slideActions, dispatch),
  };
}


/**
 * Español:
 * Exportando nuestro containar dinámicamente para ser usado
 * tanto con nuestro componente Presentation.jsx como con Speaker.jsx.
 *
 * English:
 * Dinamically exporting our container to be used,
 * with both our Presentation.jsx and Speaker.jsx components.
 *
 * @param {Object} Component - Componente de React | React component.
 */
const container = Component => (
  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component))
);

export default container;

