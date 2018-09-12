import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import MainPublic from './components/main-public.component';
import MainPrivate from './components/main-private.component';
import LoginPage from './components/login-page.component';
import ForgotPassword from './components/forgot-password.component';
import './vendor/css/bootstrap.min.css';
import './vendor/css/nifty.min.css';
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
            {/* <Route exact path="/auth" component={MainPublic}>
                <Route exact path="/auth/login" component={LoginPage}/>
                <Route exact path="/auth/forgot-password" component={ForgotPassword}/>
            </Route>     */}
            <Route exact path="/teste" component={MainPrivate} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);