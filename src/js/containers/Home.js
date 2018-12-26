import { html } from 'lit-html';

import Card from '../components/Card';
import Notifications from './Notifications';

/**
 * Home
 */
const Home = () => {
  const clsHeader = 'home-header';
  const clsHeaderTitle = 'home-header__title';

  return html`
    <header class=${clsHeader}>
      <h2 class=${clsHeaderTitle}>Welcome</h2>
    </header>
    ${Card('bell','Notifications', Notifications(['a','b','c','d']), 'notifications-container')}
    ${Card('envelope','Messages', html`<div>Messages</div>`)}
    ${Card(undefined,'Reminders', html`<div>Reminders</div>`)}
    ${Card('check-square','Checklist', html`<h3>Checklist</h3>`)}
    ${Card('birthday-cake','Birthdays', html`<h3>Birthdays</h3>`)}
  `;
};

export default Home;
