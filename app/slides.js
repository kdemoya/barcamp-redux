/* eslint global-require: 0 */
/**
 * barcamp-redux | slides.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */


/**
 * Spanish:
 * Lista de todos los slides de nuestra presentación, serán usados por Redux
 * para ir actualizando nuestro estado, es bueno saber que normalmente este tipo de datos
 * los obtendremos en algún tipo de API o desde nuestro backend.
 *
 * English:
 * List of all the slide of our presentation, they'll be used by Redux
 * to update our global state, es good to know that normally we will receive this kind
 * of data from an external API or from our backend.
 */
const slidesConfig = {
  slide1: {
    header: ['Redux', 'and the modern web'],
    subHeader: '– A love story –',
    headerFit: true,
    type: 'simple',
    notes: 'Intro',
  },
  slide2: {
    header: 'Really?',
    image: require('./assets/cat.jpg'),
    type: 'image',
    align: 'center',
    notes: 'A love story? Really?...',
  },
  slide3: {
    header: 'Kelvin De Moya',
    subHeader: 'Software Developer',
    list: ['Desarrollo Web / Mobile', 'Diseño de Interfaces', 'Automatización'],
    image: require('./assets/kdm_photo.png'),
    headerFit: true,
    background: require('./assets/background2.jpg'),
    type: 'listImage',
  },
  slide4: {
    header: 'X-Team',
    subHeader: 'International',
    list: ['NodeJS / MongoDB', 'React / Redux', 'AngularJS'],
    image: require('./assets/kdm_hero.png'),
    headerFit: true,
    background: require('./assets/background2.jpg'),
    type: 'listImage',
  },
  slide5: {
    header: 'The Modern Web',
    subHeader: 'La Web Moderna',
    headerFit: true,
    background: require('./assets/background3.jpg'),
    type: 'simple',
    notes: 'Manejar una aplicación web es cada día más complicado, cada vez vemos webs más complejas, más interactivas, más informativas, más robustas, etc… Y como developers se espera que manejemos escenarios y complejidades que antes no eran requeridas. Esto implica que cada vez nuestras webs sean más inteligentes y manejen más información en paralelo, a esto le llamamos el “estado” de nuestra aplicación.',
  },
  slide6: {
    image: require('./assets/state_change.gif'),
    type: 'image',
    notes: 'Por lo general, a medida que una aplicación web crece en complejidad y features así mismo se refleja en la complejidad de su estado, llegando a un momento en el cual es virtualmente un desastre, con un componente que actualice actualice otros, el estado de la aplicación mutando en diferentes sitios, and so on...',
  },
  slide7: {
    image: require('./assets/state_change2.gif'),
    type: 'image',
    notes: 'Incluso pensarlo y decirlo es un desastre, imagínense la pela que sería debuggear por que a X componente llegó data corrupta o por qué este otro se actualizó cuando no debería.',
  },
  slide8: {
    image: require('./assets/redux_logo.png'),
    type: 'image',
    notes: 'Redux fue creado por Dan Abramov en el 2015 mientras preparaba una charla para React Europe, una conferencia de React que se celebra anualmente en Paris. Básicamente en su charla el buscaba presentar 2 herramientas que le harían la vida más fácil como developer.',
  },
  slide9: {
    header: 'Hot Reloading',
    headerFit: true,
    type: 'simple',
    notes: 'Permite hacer cambios en el código y reflejarlos en la aplicación sin necesidad de compilar o refrescar.',
  },
  slide10: {
    header: 'Time Traveling',
    subHeader: 'viajes en el tiempo',
    headerFit: true,
    type: 'simple',
    notes: 'Buscaba mostrar los cambios de estado por los que iba pasando nuestra aplicación a medida que la usáramos y permitirnos devolver nuestra aplicación a cualquiera de esos estados en cualquier momento. Pero las herramientas existentes no facilitaban esto.',
  },
  slide11: {
    subHeader: 'http://facebook.github.io/flux/',
    image: require('./assets/flux_logo.png'),
    type: 'image',
    notes: 'Abramov se basó en una modificación de Flux para hacer funcionar sus prototipos.',
  },
  slide12: {
    image: require('./assets/flux_diagram.png'),
    type: 'image',
    notes: 'Flux simplificó bastante el proceso del manejo de datos, pero aún tenía dos cosas que podrían ser más simples: Los stores mutaban el estado y no eran centralizados.',
  },
  slide13: {
    image: require('./assets/abramov_tweet.png'),
    type: 'image',
    notes: 'Boom! Nació una nueva implementación de Flux.',
  },
  slide14: {
    header: ['Entonces...', 'Qué es Redux exactamente?'],
    headerFit: true,
    type: 'simple',
    notes: 'Redux es un contenedor de estados predecibles, para aplicaciones en JavaScript.',
  },
  slide15: {
    header: ['Ajá...', 'Y para que sirve?'],
    headerFit: true,
    type: 'simple',
    notes: 'Nos ayuda a crear aplicaciones cuyo estado se comporte de manera consistente ya sea en el cliente o en el servidor. Su fuerte no es ofrecer una vasta cantidad de features ni ser una navaja suiza, de hecho, tampoco está diseñado para ser la forma más rápida de programar nuestra aplicación, más bien nos guia a un flujo de trabajo más limpio y con un comportamiento predecible, lo cual es logrado estableciendo las siguientes restricciones',
  },
  slide16: {
    header: 'Restricciones',
    list: ['Fuente de verdad única', 'Solicitar cambios solo mediante “Actions”', 'Aplicar cambios solo mediante “Reducers”'],
    headerFit: true,
    background: require('./assets/background4.jpg'),
    type: 'list',
    notes: 'Veamos y entendamos una por una las restricciones que nos plantea Redux.',
  },
  slide17: {
    header: 'Fuente de verdad única',
    background: require('./assets/background4.jpg'),
    type: 'simple',
    notes: 'El estado de nuestra aplicación será manejado de forma centralizada por Redux, como un solo objeto. Esto nos facilita el proceso de debugging, persistencia del estado en el backend/frontend y viajes en el tiempo.',
  },
  slide18: {
    header: 'Solicitar cambios solo mediante “Actions”',
    background: require('./assets/background4.jpg'),
    type: 'simple',
    notes: 'El estado de Redux es de sólo lectura, lo que quiere decir que las acciones se encargarán de describir qué cambios se deben aplicar y serán la única manera de iniciar un cambio de estado. Podemos ver a las acciones como una intención para cambiar el estado de la aplicación, no como un cambio en si.',
  },
  slide19: {
    header: 'Aplicar cambios solo mediante “Reducers”',
    background: require('./assets/background4.jpg'),
    type: 'simple',
    notes: 'Los reducers serán los únicos encargados de aplicar los cambios al estado, basado en la acción que se haya disparado. Los reducers son funciones puras, es decir, que retornan un valor basado en los valores que reciba, sin mutarlos. Lo que significa que ni el mismo reducer muta el estado de la aplicación en sí, más bien retorna un nuevo estado con los cambios requeridos.',
  },
  slide20: {
    header: 'API Simple',
    subHeader: '3 métodos fundamentales',
    type: 'simple',
    notes: 'Su API es tan simple que consta básicamente de 3 métodos fundamentales.',
  },
  slide21: {
    header: 'Subscribe',
    subHeader: '(listener) => unsubscribe()',
    type: 'simple',
    notes: 'Nos permite agregar o remover listeners, que serán llamados cada vez que se produzca un cambio de estado y esa sería la forma de Redux avisarte que hubo un cambio de estado.',
  },
  slide22: {
    header: 'Dispatch',
    subHeader: '(action) => action',
    type: 'simple',
    notes: 'Permite emitir una acción describiendo cuál será el próximo cambio al estado, esto a su vez llamará nuestros reducers para procesar los cambios necesarios. Es la única manera de emitir un cambio de estado en Redux.',
  },
  slide23: {
    header: 'getState',
    subHeader: '() => currentState',
    type: 'simple',
    notes: 'Permite leer el estado actual de Redux.',
  },
  slide24: {
    type: 'counter',
    notes: 'Pequeño ejemplo de un contador en Redux. Veamos el historial de acciones en tiempo real.',
  },
  slide25: {
    code:
`function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1;
    case 'DECREASE_COUNTER':
      return state - 1;
    default:
      return state;
  }
}`,
    dim: 'both',
    type: 'code',
    notes: 'Ejemplo de un reducer, quien se encarga de calcular y devolver un nuevo estado para la aplicación basado en la acción recibida.',
  },
  slide26: {
    code:
`import { createStore } from 'redux';

const store = createStore(counter);

store.subscribe(() =>
  updateCounter(store.getState());
)`,
    dim: 'controls',
    type: 'code',
    notes: 'Subscribe, donde nos subscribimos para recibir los estados nuevos de la aplicación.',
  },
  slide27: {
    code:
`const increase = () => {
  store.dispatch({ type: 'INCREASE_COUNTER' })
}

const decrease = () => {
  store.dispatch({ type: 'DECREASE_COUNTER' })
}`,
    dim: 'counter',
    type: 'code',
    notes: 'Dispatchers, encargados de definir de que manera debería cambiar nuestro estado.',
  },
  slide28: {
    image: require('./assets/mockup_redux.jpg'),
    type: 'image',
    notes: 'Por lo que, si decidimos aceptar las tres reestricciones, nuestro desastre se podría convertir en algo así.',
  },
  slide29: {
    header: ['Cuando y con cuales', 'herramientas puedo usarlo?'],
    headerFit: true,
    type: 'simple',
    notes: 'Por qué tengo que modificar 3 archivos para que mi nuevo feature funcione? Por qué no puedo actualizar el estado de mi aplicación directamente? Que hay de malo en fragmentar y aislar el estado de mi aplicación? Y si quisiera usarlo... Con qué otra herramienta lo utilizaría?',
  },
  slide30: {
    header: 'Cuales?',
    headerFit: true,
    type: 'simple',
    notes: 'Con cuales herramientas puedo usarlo?',
  },
  slide31: {
    subHeader: 'https://facebook.github.io/react/',
    image: require('./assets/react_logo.png'),
    type: 'image',
    notes: 'React es una libreria para crear interfaces interactivas y está orientada a dividir tu aplicación en pequeños componentes, lo que hace que React y Redux trabajen tan bien juntos es lo inteligente y eficiente que es React para actualizar y renderizar nuestros componentes cuando la data cambia.',
  },
  slide32: {
    image: require('./assets/libraries_logos.png'),
    type: 'image',
    notes: 'Librerías con las que se puede usar Redux.',
  },
  slide33: {
    header: 'Cuando?',
    headerFit: true,
    type: 'simple',
    notes: 'No necesitas Redux para crear una buena aplicación o estructura y no siempre debes incluirla por defecto en todo lo que hagas. Pero en el momento que sientes que la vida se te hace más fácil teniendo un estado centralizado, que esto ayudará tu proceso development y hará tu app más eficiente e incluso que quieras deshacerte de lo siguiente:',
  },
  slide34: {
    header: 'Ola k asen?',
    image: require('./assets/mockup_mess.jpg'),
    type: 'image',
    notes: 'Redux es tu amigo.',
  },
  slide35: {
    header: 'Me interesa!',
    subHeader: 'dónde aprendo más?',
    headerFit: true,
    type: 'simple',
    notes: 'Hay muchos recursos online para aprender Redux, veamos los más destacados.',
  },
  slide36: {
    header: 'Getting Started with Redux',
    subHeader: 'http://egghead.io',
    headerFit: true,
    image: require('./assets/egh_redux.png'),
    type: 'image',
    notes: 'Este curso fue hecho por el creador de Redux: Dan Abramov y explica a fondo como funciona Redux y profundiza mucho más de lo que vimos en esta charla.',
  },
  slide37: {
    header: 'http://redux.js.org/',
    subHeader: 'Documentación oficial',
    headerFit: true,
    type: 'simple',
    notes: 'La documentación oficial explica muy bien las razones de ser de Redux, y nos sirve como referencia para cualquier duda sobre su API.',
  },
  slide38: {
    header: 'Start Using React to Build Web Applications',
    subHeader: 'http://egghead.io',
    headerFit: true,
    image: require('./assets/egh_react.png'),
    type: 'image',
    notes: 'Si también les interesa aprender React, este curso introductorio de egghead es un buen sitio para iniciar.',
  },
  slide39: {
    image: require('./assets/barcamp_logo.png'),
    type: 'image',
    notes: 'Habrá una charla sobre React más tarde.',
  },
  slide40: {
    header: 'Contactame!',
    subHeader: 'kdemoya17@gmail.com',
    headerFit: true,
    type: 'simple',
    notes: 'Para dudas o asesoría.',
  },
  slide41: {
    header: ['One more', 'thing...'],
    headerFit: true,
    type: 'simple',
    notes: 'à la Steve Jobs',
  },
  slide42: {
    image: require('./assets/os_talk.png'),
    type: 'image',
    notes: 'React + Redux + Barcamp = Experimentación y punchadera.',
  },
  slide43: {
    header: 'Código fuente disponible',
    subHeader: 'github.com/kdemoya/barcamp-redux',
    type: 'simple',
    notes: 'Éste slide y todos sus ejemplos fueron hechos desde cero con React y Redux y está libre para descargarlo, experimentar y ver como encajan sus partes.',
  },
  slide44: {
    header: 'Preguntas?',
    subHeader: 'github.com/kdemoya/barcamp-redux',
    type: 'simple',
  },
  slide45: {
    header: 'Gracias',
    subHeader: 'Kelvin De Moya',
    type: 'simple',
  },
};

export default slidesConfig;
