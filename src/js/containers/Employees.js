import { html } from 'lit-html';

/**
 * Employees
 * 
 * @param {string} title 
 */
const Employees = (title = 'Johny') => html`
  <div>EMPLOYEES: ${title}</div>
`;

export default Employees;