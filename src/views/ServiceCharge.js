import React,{ useEffect,useState }  from 'react'
import '../css/common.styl'
import '../css/serviceCharge.styl'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import {jsCallNative} from '../common/base'
import { withRouter } from "react-router-dom"
function ServiceCharge(props) {
     const [num,setNum]=useState(null);
     const invite=()=>{
         jsCallNative("invite");
     }
     useEffect(() => {
        window.serviceNumber=serviceNumber;
     }, []);
     const serviceNumber=(data)=>{
        setNum(data)
    }
     let result=num?num:JSON.stringify({gradeNumber:0,ratio:0});
     return (
          <div className="service-charge common-box">
              <Header titleSrc={require("../images/pic_withdraw_topbg_d.png")} historyData={props}/>
              <div className="content">
                    <div className="main">
                         <div className="details pl-16 pr-16 fs-14 pt-18">
                              <div>
                                   1.成功邀请1人玩游戏即可降低5%服务费率；
                              </div>
                              <div className="mt-10">
                                   2.提升海盗团等级服务费比率最高可降至20%
                              </div>
                              <div className="flex-justify-center mt-18">
                                   <Link to={`/serviceChargeInfo/${result}`} className="flex-justify-center flex-items-center fs-14 more">
                                        <span className="mt-2">查看更多</span>
                                        <img src={require("../images/ic_withdraw_more_blue.png")} alt=""/>
                                   </Link>
                              </div>
                              <div className="flex-justify-center">
                                   <button className="inviteBtn btn" onClick={invite}></button>
                              </div>
                         </div>
                    </div>
              </div>
          </div>
      );
}
export default withRouter(ServiceCharge)