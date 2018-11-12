import { action } from "mobx";
import Store from './store';

export const setMainContainer = action((hash) => {
  Store.mainContainer = hash;
});
