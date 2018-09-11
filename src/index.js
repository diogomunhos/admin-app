import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import LoginPage from './components/login-page.component';
import NotFound from './components/not-found-page.component';
import ForgotPassword from './components/forgot-password.component';
import './vendor/css/bootstrap.min.css';
import './vendor/css/nifty.min.css';
import './vendor/css/custom.css';
import './vendor/js/bootstrap.min.js';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);