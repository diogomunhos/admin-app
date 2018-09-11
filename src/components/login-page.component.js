import React from 'react';
import label from '../labels/login.label';
class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            labels: label,
            isRememberChecked: false,
            username: "",
            password: ""
        };
        //this.handleRememberClick = this.handleRememberClick.bind(this);
    }

    handleRememberClick(){
        this.setState({
            isRememberChecked: !this.state.isRememberChecked
        });
    }

    handleUserNameChange(evt){
        this.setState({
            username: evt.target.value
        })
    }

    handlePasswordChange(evt){
        this.setState({
            password: evt.target.value
        })
    }

    handleSigninClick(evt){
        evt.preventDefault();
        console.log(this.state);
    }

    componentDidMount() {
        document.title = this.state.labels.title;
    }
    render(){
     return (
        <div className="cls-container">
            <div className="bg-img backgroung-login"></div>
            <div className="cls-content">
                <div className="cls-content-sm panel">
                    <div className="panel-body">
                        <div className="mar-ver pad-btm">
                            <h1 className="h3">{this.state.labels.page_header}</h1>
                            <p>{this.state.labels.header_complement}</p>
                        </div>
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={evt => this.handleUserNameChange(evt)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={evt => this.handlePasswordChange(evt)}/>
                            </div>
                            <div className="checkbox pad-btm text-left" onClick={() => this.handleRememberClick()}>
                                <input className="magic-checkbox" type="checkbox" checked={this.state.isRememberChecked} />
                                <label>{this.state.labels.remember}</label>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block" onClick={evt => this.handleSigninClick(evt)}>{this.state.labels.signin}</button>
                        </form>
                    </div>
                    <div className="pad-all">
                        <a href="/forgot-password" className="btn-link mar-rgt">{this.state.labels.forgot_password}</a>
                        <a href="pages-register.html" className="btn-link mar-lft">{this.state.labels.create_new_account}</a>
                    </div>
                </div>
            </div>
        </div>
     );
 }

}

export default LoginPage