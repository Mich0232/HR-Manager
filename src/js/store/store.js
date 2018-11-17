import { observable } from "mobx";

const Store = observable({
  mainPane: 'home',
  navigationHidden: false
});

export default Store;