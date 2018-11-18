import { html } from 'lit-html';

import Logo from '../../images/logo_transparent.png';
import Card from '../components/Card';

/**
 * Home
 */
const Home = () => {
  const clsHeader = 'home__header';
  const clsImageLogo = 'home__img-logo';
  
  return html`
    <header class=${clsHeader}>
      <img class=${clsImageLogo} src=${Logo}>
    
    </header>
    ${Card('bell','Notifications', html`<div>Notifications</div>`)}
    ${Card('envelope','Messages', html`<div>Messages</div>`)}
    ${Card(undefined,'Reminders', html`<div>Reminders</div>`)}
    ${Card('check-square','Checklist', html`<div>Checklist</div>`)}
  `;
};


export default Home;