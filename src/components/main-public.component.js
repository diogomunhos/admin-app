import React from 'react';
class MainPublic extends React.Component{


    render(){
        return (
            <div className="cls-container">
                <div className="bg-img background-login"></div>
                <div className="cls-content">
                        {/* <Link to="/login" component={LoginPage}/>
                        <Link to="/forgot-password" component={ForgotPassword}/> */}
                        {this.props.children}
                </div>
            </div>
        )
    }

}

export default MainPublic