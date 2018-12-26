import { html } from 'lit-html';
import { configure } from 'mobx';

import Navigation from './Navigation';
import Header from './Header';
import { activePane } from '../utils/routing';
import Store from '../store/store';

configure({
    enforceActions: 'always',
    isolateGlobalState:  true
});

/**
 * App container
 */
const App = () => {
  const hash = window.location.hash.substr(1) || Store.mainPane;
  const links = ['home', 'dashboard', 'employees', 'company'];
  const clsNavigation = 'navigation-container';
  const clsContent = 'content';
  const clsHeader = 'header-container';
  const clsMainPane = 'main-pane-container';
  
  return html`
    <nav id='Navigation' class=${clsNavigation}>${Navigation(links, hash)}</nav>
    <div class=${clsContent}>
      <header id='Header' class=${clsHeader}>${Header()}</header>
      <div id='MainPane' class=${clsMainPane}>${activePane(hash, links)}</div>
    </div>
  `;
};

export default App;
