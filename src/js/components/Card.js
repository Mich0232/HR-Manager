import { html } from 'lit-html';


/**
 * Card component
 * 
 * @param {string} icon 
 * @param {string} header 
 * @param {*} content 
 */
const Card = (icon = 'align-justify', header, content, id = '' ) => {
  const clsContainer = 'card-container';
  const clsHeader = 'card__header';
  const clsContent = 'card__content';

  return html`
    <div class=${clsContainer}>
      <header class=${clsHeader}>
        <i class=${`fas fa-${icon}`}></i>
        ${header}
      </header>
      <div id=${id} class=${clsContent}>${content}</div>
    </div>
  `;
};


export default Card;