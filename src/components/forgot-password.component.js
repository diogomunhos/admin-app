import React from 'react';
import {NavLink} from 'react-router-dom'; 
class ForgotPassword extends React.Component{

    render(){
        return (
            <div className="cls-content-sm panel">
                <div className="panel-body">
                    <h1 className="h3">Forgot password</h1>
                    <p className="pad-btm">Enter your email address to recover your password. </p>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-danger btn-lg btn-block" >Reset Password</button>
                        </div>
                    </form>
                    <div className="pad-top">
                        <NavLink to="/login" className="btn-link text-bold text-main">Back to Login</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword
