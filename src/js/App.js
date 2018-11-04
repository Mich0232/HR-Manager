import { html, render } from 'lit-html';
import Navigation from './templates/Navigation';
import Home from './templates/Home';
import Dashboard from './templates/Dashboard';
import Employees from './templates/Employees';


const links = ['home', 'dashboard', 'employees']
const navigationContainer = Navigation(links);

const homeContainer = Home();
const dashboardeContainer = Dashboard();
const employeesContainer = Employees();

// do utilsow
const activeContainer = (hash) => {
  hash = hash.substr(1);
  switch (hash) {
    case links[0]:
      return homeContainer
    case links[1]:
      return dashboardeContainer
    case links[2]:
      return employeesContainer
  }
}

const App = () => html`
  ${navigationContainer}
  <div id='mainContainer'>${activeContainer(window.location.hash)}</div>
`;

export default App;
