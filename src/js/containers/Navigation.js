import { html, render } from 'lit-html';
import { observe, observable, action } from "mobx";

import Store from '../store/store';
import { setMainPane } from '../store/actions';
import { activePane } from '../utils/routing';

/**
 * Navigation State:
 * 
 * {array} links
 */
const State = observable({
  links: []
});

observe(Store,'mainPane', () => {
  const { mainPane } = Store;
  const { links } = State;

  const mainPaneContainer = document.getElementById('MainPane');
  if (!mainPaneContainer) return
  render(activePane(mainPane, links), mainPaneContainer);

  const navContainer = document.getElementById('Navigation');
  if (!navContainer) return
  render(Navigation(), navContainer)
});

observe(Store, 'navigationHidden', () => {
  const navContainer = document.getElementById('Navigation');
  if (!navContainer) return
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
  return el === Store.mainPane ? ' navigation__item--active' : '';
};

/**
 * Navigation container
 * 
 * @param {array} links
 * @param {string} hash
 */
const Navigation = (links = State.links, hash = Store.mainPane) => {

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
