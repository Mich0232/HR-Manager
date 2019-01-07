import { html } from 'lit-html';


/**
 * Messages
 */
const Messages = (data) => {
  
  return html`
    <ul>
      ${data.map((el) => html`
        <li>${el}</li>
      `)}
    </ul>
  `;
};

export default Messages;
