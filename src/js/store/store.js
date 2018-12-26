import { observable } from "mobx";

/**
 * Main store:
 * 
 * {string} mainPane
 * {boolean} navigationHidden
 * {array || null} employeesList
 */
const Store = observable({
  mainPane: 'home',
  navigationHidden: false,
  employeesList: null
});

export default Store;