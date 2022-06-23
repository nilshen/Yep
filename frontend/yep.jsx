import React from "react";
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from "./components/root"
import { fetchRestaurants, fetchRestaurant } from "./util/restaurant_api_util";
import {requestRestaurants, requestRestaurant } from './actions/restaurant_actions'


document.addEventListener("DOMContentLoaded", ()=> {
    // debugger
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
    // debugger
    const root = document.getElementById('root');
    // debugger 
    ReactDOM.render(<Root store={store} />, root);
    // TESTING START
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchRestaurants = fetchRestaurants;
    window.fetchRestaurant = fetchRestaurant;
    window.requestRestaurants = requestRestaurants
    window.requestRestaurant = requestRestaurant
  // TESTING END
    // debugger
})
