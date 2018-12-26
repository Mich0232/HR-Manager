import { html } from 'lit-html';


/**
 * Loader component
 */
const Loader = () => {
  const clsContainer = 'loader-container';
  const clsLoader = 'loader__spinner';

  return html`
  <div class=${clsContainer}>
    <div class=${clsLoader}></div>
  </div>
  `;
};


export default Loader;