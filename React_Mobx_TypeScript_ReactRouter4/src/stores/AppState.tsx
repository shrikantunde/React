import { observable, action } from 'mobx';
import axios from 'axios';
import * as MenuItems from './../components/header/menuBarJson';

export default class AppState {
  @observable authenticated: boolean;
  @observable authenticating: boolean;
  @observable items;
  @observable item;
  @observable menuItems;

  constructor() {
    this.items=[];
    this.item={};
    this.authenticated=true;
    this.authenticating=true;
    this.menuItems=MenuItems;
  }

  fetchData(pathname, id) {
    
  }

  @action setData(data) {
    this.items = data;
  }

  @action authenticate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }
  
  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

}