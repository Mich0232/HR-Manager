import { html } from 'lit-html';

import Navigation from './Navigation';
import { activeContainer } from '../utils/routing';
import Store from '../store/store';

/**
 * App container
 */
const App = () => {
  const hash = window.location.hash.substr(1) || Store.mainContainer;
  const links = ['home', 'dashboard', 'employees']
  const clsNavigation = 'navigation-container'
  const clsMainContainer = 'main-container'
  
  return html`
    <nav id='Navigation' class=${clsNavigation}>${Navigation(links)}</nav>
    <div id='MainContainer' class=${clsMainContainer}>${activeContainer(hash, links)}</div>
  `;
}

export default App;
