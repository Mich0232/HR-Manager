import { observable } from "mobx";

/**
 * Main store:
 * 
 * {string} mainPane
 * {boolean} navigationHidden
 */
const Store = observable({
  mainPane: 'home',
  navigationHidden: false
});

export default Store;