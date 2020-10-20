import React from 'react'
import Header from '@components/Header'
import '@css/helpList.styl'
import {data} from "@data/helpData"
import {Link,withRouter} from 'react-router-dom'
function HelpList(props) {
        return (
                <div className="help-list">
                <Header titleSrc={require(`../images/ic_title_${props.match.params.id}.png`)} historyData={props}/>
                    <div className="list">
                        <div className="mt-14 pl-10 pr-10">
                            {data[props.match.params.id].content.map((item,index)=>{
                                return(
                                <Link to={`/helpDetails/${props.match.params.id}/${index}${props.location.pathname}`} key={index} className="fs-14 mt-4 flex-items-center pl-12 pr-12">{item.question}</Link> 
                                )
                            })}
                        </div>
                    </div>
                </div>
        );
    }
export default withRouter(HelpList);