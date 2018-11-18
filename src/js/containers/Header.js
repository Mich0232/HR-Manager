import { html, render } from 'lit-html';
import { observe, observable } from "mobx";

import Store from '../store/store';
import { toggleNavigation } from '../store/actions';


/**
 * Header State:
 * 
 * {boolean} navigationHidden
 */
const State = observable({
  navigationHidden: Store.navigationHidden
});

observe(Store, 'navigationHidden', () => {
  State.navigationHidden = Store.navigationHidden
});

observe(State, () => {
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
  const renderBtnHideNavIcon = State.navigationHidden
    ? html`<i class='fas fa-angle-right header__btn-hide-icon'></i>`
    : html`<i class='fas fa-angle-left header__btn-hide-icon'></i>`;
  const btnHideNavTitle = State.navigationHidden
    ? 'Show navigation'
    : 'Hide navigation';

  return html`
    <button class=${clsBtnHideNav} @click=${handleClickHideNav} title=${btnHideNavTitle}>
      ${renderBtnHideNavIcon}
    </button>
`;
};


export default Header;