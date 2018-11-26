import { html, render } from 'lit-html';
import { observe } from "mobx";

import Store from '../store/store';
import { toggleNavigation } from '../store/actions';


observe(Store, 'navigationHidden', () => {
  const headerContainer = document.getElementById('Header');
  if (!headerContainer) return
  render(Header(), headerContainer);
});

const handleClickHideNav = () => {
  toggleNavigation();
}

/**
 * Header container
 */
const Header = () => {

  const clsBtnHideNav = 'header__btn-hide';
  const renderBtnHideNavIcon = Store.navigationHidden
    ? html`<i class='fas fa-angle-right header__btn-hide-icon'></i>`
    : html`<i class='fas fa-angle-left header__btn-hide-icon'></i>`;
  const btnHideNavTitle = Store.navigationHidden
    ? 'Show navigation'
    : 'Hide navigation';

  return html`
    <button class=${clsBtnHideNav} @click=${handleClickHideNav} title=${btnHideNavTitle}>
      ${renderBtnHideNavIcon}
    </button>
`;
};


export default Header;