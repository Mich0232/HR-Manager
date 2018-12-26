import { html } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import { observe } from 'mobx';

import { getEmployees } from '../store/actions';
import Store from '../store/store';
import Card from '../components/Card';
import Loader from '../components/Loader';

function renderEmployees () {
  getEmployees();
  
  return new Promise((resolve) => {
    observe(Store, 'employeesList', () => {
      const { employeesList } = Store;
      if (employeesList.length) {
        resolve(employeesList.map((el) => html`<div>${el.name} ${el.surname}</div>`));
      }
    });
  });
};

/**
 * Employees
 * 
 * @param {string} title 
 */
const Employees = () => html`
  ${Card('users','Employees', until(renderEmployees(), Loader()))}
`;

export default Employees;