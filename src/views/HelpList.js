import React, { Component } from 'react'
import Header from '@components/Header'
import '@css/helpList.styl'
import {data} from "@data/helpData"
import {Link} from 'react-router-dom'
class Details extends Component {
    constructor(props) {           
       super(props);
       this.state={
           
       }

       
    }
    render() {
        return (
            <div className="help-list">
               <Header titleSrc={require(`../images/ic_title_${this.props.match.params.id}.png`)}/>
                <div className="list">
                    <div className="mt-14 pl-10 pr-10">
                       
                        {data[this.props.match.params.id].content.map((item,index)=>{
                            return(
                               <Link to={`/helpDetails/4/${index}`} key={index} className="fs-14 mt-4 flex-items-center pl-12 pr-12">{item.question}</Link> 
                            )
                            
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Details;