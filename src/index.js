import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import MainPublic from './layouts/main-public.layout';
import MainPrivate from './layouts/main-private.layout';
import LoginPage from './pages/login.page';
import NotFound from './pages/not-found.page';
import ForgotPassword from './pages/forgot-password.page';
import './vendor/css/bootstrap.min.css';
import './vendor/css/nifty.min.css';
import './vendor/css/nifty-demo-icons.min.css';
import './vendor/css/custom.css';
import './vendor/js/bootstrap.min.js';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )
  

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <AppRoute exact path="/login" layout={MainPublic} component={LoginPage} />
            <AppRoute exact path="/forgot-password" layout={MainPublic} component={ForgotPassword} />
            <Route exact path="/teste" component={MainPrivate} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);