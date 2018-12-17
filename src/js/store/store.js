import { observable } from "mobx";

/**
 * Main store:
 * 
 * {string} mainPane
 * {boolean} navigationHidden
 * {array} employeesList
 */
const Store = observable({
  mainPane: 'home',
  navigationHidden: false,
  employeesList: []
});

export default Store;