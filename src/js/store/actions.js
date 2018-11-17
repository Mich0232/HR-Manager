import { action } from "mobx";
import Store from './store';

export const setMainPane = action((hash) => {
  Store.mainPane = hash;
});

export const toggleNavigation = action(() => {
  Store.navigationHidden = !Store.navigationHidden;
});
