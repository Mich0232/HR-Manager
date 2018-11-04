import { html, render } from 'lit-html';
import Home from './Home';
import Dashboard from './Dashboard';
import Employees from './Employees';

const homeContainer = Home();
const dashboardeContainer = Dashboard();
const employeesContainer = Employees();
const links = ['home', 'dashboard', 'employees']

const activeContainer = (el) => {
// console.log(el);
  switch (el) {
    case links[0]:
      return homeContainer
    case links[1]:
      return dashboardeContainer
    case links[2]:
      return employeesContainer
  }
}

const handleClick = (el) => {
  const mainContainer = document.getElementById('mainContainer');
  render(activeContainer(el), mainContainer);
};

const Navigation = (links = []) => html`
  <ul>
    ${links.map((el)=> html`
      <li><a href=${'#'+ el} @click=${()=>handleClick(el)}>${el}</a></li>
    `)}
  </ul>
  `;


export default Navigation;