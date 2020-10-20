/*global clientWindow window*/
import React ,{ useEffect,useState } from 'react'
import '@css/serviceChargeInfo.styl'
import Header from '@components/Header'
import {jsCallNative,getPlane} from '../common/base'
import { withRouter } from "react-router-dom";
function ServiceChargeInfo(props) {
    const [num,setNum]=useState(JSON.stringify({gradeNumber:0,ratio:0}));
    const serviceNumber=(data)=>{
        setNum(data)
    }
    useEffect(() => {
        window.serviceNumber=serviceNumber;
    }, []);
    const upGrade=()=>{
         jsCallNative("upGrade");
    }
    let result={gradeNumber:0,ratio:0};
    if(getPlane()){
          if(props.match.params.source!=='0'){
               result=JSON.parse(props.match.params.source);
          }else{
             result=num?JSON.parse(num):{gradeNumber:1,ratio:2};
          }
          
          
    }else{
        try {
            result=JSON.parse(clientWindow.serviceNumber()); 
        } catch (error) {
            result={gradeNumber:0,ratio:0}
        } 
    }
    
     return (
          <div className="service-charge-info common-box">
              <Header titleSrc={require("../images/pic_withdraw_topbg_d.png")} historyData={props}/>
              <div className="content">
                    <div className="main">
                         <div className="details pl-16 pr-16 fs-14 pt-18 pb-40">
                              <div className="level flex-between flex-items-center">
                                   <div className="flex-column num-box flex-justify-center flex-items-center">
                                        <div className="fs-22">
                                             {result.gradeNumber}级
                                        </div>
                                        <div className="mt-6">
                                             当前等级
                                        </div>
                                   </div>
                                   <div className="line">

                                   </div>
                                    <div className="flex-column num-box  flex-justify-center flex-items-center">
                                        <div>
                                            <span className="fs-22">{result.ratio}</span> %
                                        </div>
                                        <div className="mt-6">
                                             服务费比率
                                        </div>
                                   </div>
                              </div>
                              <div className="mt-16">
                                   海盗团等级与服务费比率关系表如下：
                              </div>
                              <table className="mt-6">
                                   <tbody>
                                        <tr>
                                             <th>海盗团等级</th>
                                             <th>收取服务费</th>
                                        </tr>
                                        
                                        <tr>
                                             <td>0</td>
                                             <td>90%</td>
                                        </tr>
                                        <tr>
                                             <td>1</td>
                                             <td>90%</td>
                                        </tr>
                                        <tr>
                                             <td>2</td>
                                             <td>85%</td>
                                        </tr>
                                        <tr>
                                             <td>3</td>
                                             <td>80%</td>
                                        </tr>
                                        <tr>
                                             <td>4</td>
                                             <td>75%</td>
                                        </tr>
                                        <tr>
                                             <td>5</td>
                                             <td>70%</td>
                                        </tr>
                                        <tr>
                                             <td>6</td>
                                             <td>60%</td>
                                        </tr>
                                        <tr>
                                             <td>7</td>
                                             <td>50%</td>
                                        </tr>
                                        <tr>
                                             <td>8</td>
                                             <td>40%</td>
                                        </tr>
                                        <tr>
                                             <td>9</td>
                                             <td>30%</td>
                                        </tr>
                                        <tr>
                                             <td>10</td>
                                             <td>20%</td>
                                        </tr>
                                   </tbody>
                              </table>
                              <div className="mt-18">
                                   每次提现需要扣除金额的{result.ratio}%作为服务费，提高海盗团等级可永久降低服务费。
                              </div>
                              <div className="flex-justify-center mt-16">
                                   <button className="flex-justify-center flex-items-center fs-14 more" onClick={upGrade}>
                                        去提升海盗团等级
                                        <img src={require("../images/ic_withdraw_more_blue.png")} alt=""/>
                                   </button>
                              </div>

                         </div>

                    </div>
              </div>
          </div>
      );
}
export default withRouter(ServiceChargeInfo)