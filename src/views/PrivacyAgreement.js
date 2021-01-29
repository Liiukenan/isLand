import React from 'react'
import Header from '@components/Header'
import '@css/privacyClause.styl'
import '@css/common.styl'
import {data} from '@data/agreementData'
function PrivacyAgreement(props) {
  return (
    <div className="privacy-clause common-box">
      <Header
        titleSrc={require('../images/ic_clause.png')}
        historyData={props}
      />
      <div className="content">
        <div className="main">
          <div className="details pl-16 pr-16 fs-14">
            <div className="title fs-18 mt-16 flex-justify-center">
              Idle Island Builder - Privacy Policy
            </div>
            <div style={{textAlign:"right"}}>
            Last updated on: October 14, 2020
            </div>
            <div className="mt-16">
                            {data.map((item,index)=>{
                                return(
                                  <div key={index} dangerouslySetInnerHTML = {{ __html:`${item}` }} className="article">
                                    </div>
                                )
                            })}
                        </div>
           </div>
        </div>
      </div>
    </div>
  )
}
export default PrivacyAgreement
