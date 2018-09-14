import React from 'react';
class NotFound extends React.Component{

 render(){
     return (
        <div className="cls-container">
            <div className="cls-header">
                <div className="cls-brand">
                    <a className="box-inline" href="/">
                        <span className="brand-title">Nifty<span className="text-thin">Admin</span></span>
                    </a>
                </div>
            </div>

            <div className="cls-content">
                <h1 className="error-code text-info">404</h1>
                <p className="h4 text-uppercase text-bold">Page Not Found!</p>
                <div className="pad-btm">
                    Sorry, but the page you are looking for has not been found on our server.
                </div>

                <hr className="new-section-sm bord-no"/>
                <div className="pad-top"><a className="btn btn-primary" href="/">Return Home</a></div>
            </div>
        </div>
     );
 }

}

export default NotFound