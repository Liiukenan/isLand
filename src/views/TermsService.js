import React  from 'react'
import Header from '../components/Header'
import '../css/common.styl'
import '../css/privacyClause.styl'
import {data} from '../data/termData'
function TermsService(props) {
    return (
        <div className="privacy-clause common-box">
            <Header titleSrc={require("../images/ic_deal.png")} historyData={props}/>
            <div className="content">
                <div className="main">
                    <div className="details pl-16 pr-16 fs-14 contents">
                        <div className="title fs-18 mt-16 flex-justify-center">
                        Idle Island Builder – Terms of Use
                        </div>
                        <div className="mt-16">
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index} dangerouslySetInnerHTML = {{ __html:`${item}` }} className="article">
                                     
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default TermsService;
