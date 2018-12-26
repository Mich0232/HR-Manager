import { html, render } from 'lit-html';
import { observe } from "mobx";

import Store from '../store/store';
import { toggleNavigation } from '../store/actions';

import Logo from '../../images/logo_transparent.png';


observe(Store, 'navigationHidden', () => {
  const headerContainer = document.getElementById('Header');
  if (!headerContainer) return
  render(Header(), headerContainer);
});

const handleClickToggleNav = () => {
  toggleNavigation();
}

/**
 * Header container
 */
const Header = () => {

  const clsBtnToggleNav = 'header__btn-toggle';
  const clsMenu = 'header-menu';
  const clsMenuItem = 'header-menu__item';
  const clsImageLogo = 'header-menu__logo';
  
  const renderBtnHideNavIcon = Store.navigationHidden
    ? html`<i class='fas fa-angle-right header__btn-toggle-icon'></i>`
    : html`<i class='fas fa-angle-left header__btn-toggle-icon'></i>`;
  const btnToggleNavTitle = Store.navigationHidden
    ? 'Show navigation'
    : 'Hide navigation';

  return html`
    <button class=${clsBtnToggleNav} @click=${handleClickToggleNav} title=${btnToggleNavTitle}>
      ${renderBtnHideNavIcon}
    </button>
    <div class=${clsMenu}>
      <div class=${clsMenuItem}>
        <i class='fas fa-bell'></i>
      </div>
      <div class=${clsMenuItem}>
        <i class='fas fa-envelope'></i>
      </div>
      <div class=${clsMenuItem}>
        <img class=${clsImageLogo} src=${Logo}>
        <p>HR Manager</p>
      </div>
    </div>
  `;
};


export default Header;