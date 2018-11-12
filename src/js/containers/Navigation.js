import { html, render } from 'lit-html';
import { observe, observable, action } from "mobx";

import Store from '../store/store';
import { setMainContainer } from '../store/actions';
import { activeContainer, activeLink } from '../utils/routing';

const State = observable({
  mainContainer: Store.mainContainer,
  links: [],
  activeLink: 0
});

observe(Store, () => {
  State.mainContainer = Store.mainContainer
});

observe(State, 'mainContainer', () => {
  const { mainContainer, links } = State;
  render(activeContainer(mainContainer, links), document.getElementById('MainContainer'));
});

observe(State, 'activeLink', () => {
  render(Navigation(), document.getElementById('Navigation'));
});

const loadLinks = (links) => {
  action(() => {
    State.links = links;
  })();
}

const handleClick = (el, i) => {
  action(() => {
    setMainContainer(el)
    State.activeLink = i
  })()
};

const isActive = (i) => {
  return i === State.activeLink ? ' navigation__item--active' : '';
};

/**
 * Navigation container
 * 
 * @param {array} links 
 */
const Navigation = (links = State.links) => {
  
  loadLinks(links);
  
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
        <li class=${clsItem}${isActive(i)}>
          <a class=${clsItemLink} href=${'#'+ el} @click=${()=>handleClick(el, i)}>
            <i class=${`fas fa-${linkIcons[i]}`}></i>
            ${el}
          </a>
        </li>
      `)}
    </ul>
  `;
};

export default Navigation;
