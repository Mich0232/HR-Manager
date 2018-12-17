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
  Store.employeesList =  fetchData('employees/');
  const data =  fetchData('employees/').then((resolve) => resolve.text());
  console.log(data);
});
