import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import Employees from '../containers/Employees';

export const activePane = (hash, links) => {
  switch (hash) {
    case links[0]:
      return Home()
    case links[1]:
      return Dashboard()
    case links[2]:
      return Employees()
  }
};
