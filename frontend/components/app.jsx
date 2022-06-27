import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './homepage/homepage_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import restaurantShowContainer from './restaurants/restaurant_show_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import searchBarContainer from './search_bar/search_bar_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route path="/restrants/search/:input" component={searchBarContainer} />
      <Route path="/restaurants/:restaurantId" component={restaurantShowContainer} />
      <Route exact path="/restaurants" component={RestaurantIndexContainer} />
      <Route  path="/" component={HomepageContainer}/>
    </Switch>
  </div>
);

export default App;