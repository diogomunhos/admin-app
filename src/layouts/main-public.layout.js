import React from 'react';
class MainPublic extends React.Component{


    render(){
        return (
            <div className="cls-container">
                <div className="bg-img background-login"></div>
                <div className="cls-content">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default MainPublic