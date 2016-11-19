/**
 * barcamp-redux | slides.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import { GET_SLIDE, INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/slide';
import slidesConfig from '../slides';


/**
 * Español:
 * Estado inicial de nuestra app, Redux usará estos valores
 * para iniciar nuestra app, antes de tener un estado generado.
 *
 * English:
 * App's initial state, Redux will use this values
 * to bootstrap our app, before having a generated state.
 */
const initialState = {
  currentSlide: slidesConfig.slide1,
  step: 1,
  totalSlides: Object.keys(slidesConfig).length,
  counter: 0,
};


/**
 * Español:
 * Busca el próximo slide a mostrar, basado en el número de slide requerido.
 *
 * English:
 * Finds the next slide to show, based on requested slide number.
 *
 * @param {Object} state       - Estado actual de la app   | App's current state.
 * @param {String} slideNumber - Número de slide requerido | Requested slide number.
 * @returns {Object} Retorna el slide correcto | Returns the correct slide.
 */
function getSlide(state, slideNumber) {
  const requestedSlide = slidesConfig[`slide${slideNumber}`];

  if (!requestedSlide) {
    return state;
  }

  return { ...state, currentSlide: requestedSlide, step: slideNumber };
}


/**
 * Español:
 * "Reducer" - esta parte se encarga de cambiar el estado global
 * de nuestra aplicación cuando disparamos una acción de Redux.
 *
 * English:
 * Reducer - this part is in charge of changing the global state
 * of our app whenever we fire a Redux action.
 *
 * @param {Object} state  - Estado actual de la app    | App's current state.
 * @param {String} action - Acción que fue disparada   | Fired action.
 * @returns {Object} Retorna el nuevo estado de la app | Returns the app's new state.
 */
export default function slides(state = initialState, action) {
  switch (action.type) {
    case GET_SLIDE:
      return getSlide(state, action.slideNumber);
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
