import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import Employees from '../containers/Employees';

export const activeContainer = (hash, links) => {
  switch (hash) {
    case links[0]:
      return Home()
    case links[1]:
      return Dashboard()
    case links[2]:
      return Employees()
  }
}

export const activeLink = (hash, links) => {
  switch (hash) {
    case links[0]:
      return 0
    case links[1]:
      return 1
    case links[2]:
      return 2
  }
}