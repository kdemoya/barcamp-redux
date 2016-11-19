/**
 * barcamp-redux | slide.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

export const GET_SLIDE = 'GET_SLIDE';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';


/**
 * Español:
 * Dispara un evento de Redux tipo "GET_SLIDE" con la intención
 * de actualizar el estado global con el slide requerido.
 *
 * English:
 * Fires a Redux action of type "GET_SLIDE" with the intent,
 * of update the global state with the requested slide.
 *
 * @param {Number} slideNumber - Slide requerido | Requested slide.
 * @returns {Object} Acción de Redux | Redux action.
 */
export function getSlide(slideNumber) {
  return {
    type: GET_SLIDE,
    slideNumber,
  };
}


/**
 * Español:
 * Dispara un evento de Redux tipo "INCREASE_COUNTER" con la intención
 * de aumentar nuestro contador en el estado global.
 *
 * English:
 * Fires a Redux action of type "INCREASE_COUNTER" with the intent,
 * of increase our counter in the global state.
 *
 * @returns {Object} Acción de Redux | Redux action.
 */
export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
  };
}


/**
 * Español:
 * Dispara un evento de Redux tipo "DECREASE_COUNTER" con la intención
 * de disminuir nuestro contador en el estado global.
 *
 * English:
 * Fires a Redux action of type "DECREASE_COUNTER" with the intent,
 * of decrease our counter in the global state.
 *
 * @returns {Object} Acción de Redux | Redux action.
 */
export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER,
  };
}
