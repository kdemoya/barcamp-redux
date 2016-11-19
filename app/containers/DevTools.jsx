/**
 * barcamp-redux | DevTools.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import Inspector from 'redux-devtools-inspector';
import DockMonitor from 'redux-devtools-dock-monitor';

/**
 * Spanish:
 * Herramienta de desarrollo de Redux usada para,
 * ver el historial the acciones y viajar en el tiempo.
 *
 * English:
 * Redux's development tool used to,
 * watch the action history and time travel.
 */
export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
  >
    <Inspector />
  </DockMonitor>
);
