import { html } from 'lit-html';


/**
 * Notifications
 */
const Notifications = (data) => {
  
  return html`
    <ul>
      ${data.map((el) => html`
        <li>${el}</li>
      `)}
    </ul>
  `;
};

export default Notifications;
