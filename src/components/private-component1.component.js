import React from 'react';

class PrivateComponent1 extends React.Component{
    
    render(){
        return (
            // FINALIZADO HEADER - COMEÇO BODY
            <div className="boxed">
                <div id="content-container">
                    <div id="page-head">
                        <div className="text-center pad-btm">
                            <h3>Frequently Asked Questions</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and <br/>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,<br/> the master-builder of human happiness. </p>
                            <button type="button" className="btn btn-success">Email us your question</button>
                            <button type="button" className="btn btn-primary">Send us a tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default PrivateComponent1