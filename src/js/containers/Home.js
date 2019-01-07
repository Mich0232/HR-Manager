import { html } from 'lit-html';

import Card from '../components/Card';
import Notifications from './Notifications';
import Messages from './Messages';

/**
 * Home
 */
const Home = () => {
  const clsHeader = 'home-header';
  const clsHeaderTitle = 'home-header__title';
  const clsContent = 'home-content';
  const clsContentItem = 'home-content__item';

  return html`
    <header class=${clsHeader}>
      <h2 class=${clsHeaderTitle}>Welcome John</h2>
    </header>
    <section class=${clsContent}>
      <div class=${clsContentItem}>
        ${Card('bell','Notifications', Notifications(['a','b','c','d']), 'notifications-container')}
        ${Card(undefined,'Reminders', html`<div>Reminders</div>`)}
      </div>
      ${Card('envelope','Messages', Messages(['a','b','c','d']), 'messages-container')}
      ${Card('check-square','Checklist', html`<h3>Checklist</h3>`)}
      ${Card('birthday-cake','Birthdays', html`<h3>Birthdays</h3>`)}
    </section>
  `;
};

export default Home;
