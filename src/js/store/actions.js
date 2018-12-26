import { action } from "mobx";

import Store from './store';
import { fetchData } from '../utils/fetchData'


export const setMainPane = action((hash) => {
  Store.mainPane = hash;
});

export const toggleNavigation = action(() => {
  Store.navigationHidden = !Store.navigationHidden;
});

export const getEmployees = action(() => {
  fetchData('employees')
  .then((data) => {
    if (data) {
      Store.employeesList = data.results;
    } else {
      console.log('Cannot fetch list of employees');
    }
  })
  .catch((err) => {
    console.log(err);
  });
});
