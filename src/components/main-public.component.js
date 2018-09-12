import React from 'react';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import ForgotPassword from "./forgot-password.component";
import LoginPage from "./login-page.component";
class MainPublic extends React.Component{


    render(){
        return (
            <BrowserRouter>
                <div className="cls-container">
                    <div className="bg-img backgroung-login"></div>
                    <div className="cls-content">
                        <Switch>
                            <Route exact path="/login" component={LoginPage}/>
                            <Route exact path="/forgot-password" component={ForgotPassword}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}

export default MainPublic