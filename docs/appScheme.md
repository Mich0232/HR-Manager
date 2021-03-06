### Container example:

/**
 * Container State
 * 
 * {array} propertyNameTwo
 */
const State = observable({
  propertyNameTwo: []
});

observe(Store, () => {
  const { propertyNameTwo } = State;

 const navContainer = document.getElementById('Navigation');
  if (!navContainer) return
  render(Navigation(propertyNameTwo), navContainer)});

observe(State,'propertyNameTwo', () => {
  const { propertyNameOne } = State;

  const mainContainer = document.getElementById('MainContainer');
  if (!mainContContainer) return
  render(SomeContainer(propertyNameOne), mainContContainer);
});

......

/**
 * Navigation container
 * 
 * @param {array} links
 * @param {string} hash
 */
const Navigation = (links = State.links, hash = State.mainContainer) => {

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