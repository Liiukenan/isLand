import React, {Component} from 'react'
import Header from '@components/Header'
import '@css/privacyClause.styl'
import {data} from '@data/agreementData';
class PrivacyAgreement extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="privacy-clause">
                <Header titleSrc={require("../images/ic_clause.png")}/>
                <div className="content">
                    <div className="main">
                    <div className="details pl-16 pr-16 fs-14">
                        <div className="title fs-18 mt-16 flex-justify-center">
                            《海岛大亨隐私条款》
                        </div>
                        <div className="mt-16">
                            {data.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        

                    </div>
                     </div>
                </div>
            </div>
        );
    }
}
export default PrivacyAgreement;
