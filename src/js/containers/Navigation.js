import { html, render } from 'lit-html';
import { observe, observable, action } from "mobx";

import Store from '../store/store';
import { setMainPane } from '../store/actions';
import { activePane } from '../utils/routing';

/**
 * Navigation State:
 * 
 * {string} mainPane
 * {array} links
 */
const State = observable({
  mainPane: Store.mainPane,
  navigationHidden: Store.navigationHidden,
  links: []
});

observe(Store, () => {
  State.mainPane = Store.mainPane,
  State.navigationHidden = Store.navigationHidden
});

observe(State,'mainPane', () => {
  const { mainPane, links } = State;

  const mainPaneContainer = document.getElementById('MainPane');
  if (!mainPaneContainer) return
  render(activePane(mainPane, links), mainPaneContainer);

  const navContainer = document.getElementById('Navigation');
  if (!navContainer) return
  render(Navigation(), navContainer)
});

observe(State, 'navigationHidden', () => {
  const navContainer = document.getElementById('Navigation');
  navContainer.classList.toggle('navigation-container--hidden')
});

const loadLinks = (links, hash) => {
  action(() => {
    State.links = links;
  })();
  setMainPane(hash)
}

const handleClick = (el) => {
    setMainPane(el)
};

const isActive = (el) => {
  return el === State.mainPane ? ' navigation__item--active' : '';
};

/**
 * Navigation container
 * 
 * @param {array} links
 * @param {string} hash
 */
const Navigation = (links = State.links, hash = State.mainPane) => {

  loadLinks(links, hash);
  
  const linkIcons = ['home', 'chart-line', 'users']
  const clsNavHeader = 'navigation__header'
  const clsList = 'navigation__list'
  const clsItem = 'navigation__item';
  const clsItemLink = 'navigation__item-link';

  return html`
    <header class=${clsNavHeader}>
      <i class=${`fas fa-user-astronaut`}></i>
    </header>
    <ul class=${clsList}>
      ${State.links.map((el, i)=> html`
        <li class=${clsItem}${isActive(el)}>
          <a class=${clsItemLink} href=${'#'+ el} @click=${()=>handleClick(el)}>
            <i class=${`fas fa-${linkIcons[i]}`}></i>
            ${el}
          </a>
        </li>
      `)}
    </ul>
  `;
};

export default Navigation;
