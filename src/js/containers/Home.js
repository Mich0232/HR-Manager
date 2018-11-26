import { html } from 'lit-html';

import Logo from '../../images/logo_transparent.png';
import Card from '../components/Card';
import Notifications from './Notifications';

const data = ['a','b','c','d'];

const NotificationsContainer = Notifications(data);

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
    ${Card('bell','Notifications', NotificationsContainer, 'notification-container')}
    ${Card('envelope','Messages', html`<div>Messages</div>`)}
    ${Card(undefined,'Reminders', html`<div>Reminders</div>`)}
    ${Card('check-square','Checklist', html`<h3>Checklist</h3>`)}
  `;
};


export default Home;