import React, { Component } from 'react'
import '@css/header.styl'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
       this.goBack=this.goBack.bind(this)
    }
    goBack(){
        if(this.props.match.params.id){
            this.props.history.goBack()
            return;
        }
        console.log(1342);
        
    }
    render() {
        return (
             <div className="header">
                <img src={this.props.titleSrc} alt="" className="title-img"/>
                <div className="back">
                    <img src={require("../images/ic_activity_return.png")} alt="" onClick={this.goBack}/>
                </div>
            </div>
        )
    }
}
export default withRouter(Header);