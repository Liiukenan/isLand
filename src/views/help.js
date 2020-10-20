import React, { useEffect,useState } from "react";
import "@css/help.styl";
import Header from "@components/Header";
import { Link,withRouter } from "react-router-dom";
import { data } from "@data/helpData";
import { jsCallNative } from "../common/base";
import { lock } from "tua-body-scroll-lock";
function Help(props) {
  const linkArr=[
                '注册邀请',
                '活动',
                '海盗团',
                '福利中心'
            ]
  const [arr]=useState(linkArr)
  const contactService = () => {
    jsCallNative("jumpAiHelper");
  };
  const link=arr.map((item,index)=>{
        let path='/helpList/'+index
        return(
            <Link  to={path} className="title mt-18 flex-items-center flex-justify-center" key={index}>
                <img src={require(`../images/ic_service_${index}.png`)} alt=""/>
                <span className="fs-16 mt-4 ml-4" key={index}>{item}</span>
            </Link>
        )
    })
  useEffect(() => {
    const targetElement = document.querySelector("#customer");
    lock(targetElement);
  }, []);
//   const [isShow,setShow]=useState(true)
  return (
    // <CSSTransition
    // key={props.match.path}
    // classNames="bossText"
    // timeout={2000}
    // >
    <div className="customer" id="customer">
      <Header titleSrc={require("../images/ic_service.png")} historyData={props}/>
      <div className="content">
     
        {/* <div>显示不显示</div>
        
        <button onClick={()=>{setShow(!isShow)}}>测试测试</button> */}
        
        <div className="main flex-between flex-wrap pl-16 pr-16">{link}</div>
        <div className="hot-title pl-16 mt-30 flex-items-center">
          <img src={require("../images/ic_service_hot.png")} alt="" />
          <span className="ml-4 mt-4 fs-16">热门问题</span>
        </div>
        
        <div className="mt-15 pl-16 pr-16 question-list fs-14">
          {data[4].content.map((item, index) => {
            return (
              <Link
                to={`/helpHotDetails/4/${index}`}
                key={index}
                className="flex-items-center pl-10 mb-4"
              >
                {item.question}
              </Link>
            );
          })}
        </div>
        <button
          className="contect-service fs-18 flex-items-center flex-justify-center"
          onClick={contactService}
        >
          <img src={require("../images/ic_service_contact.png")} alt="" />
          <span className="ml-6">联系客服</span>
        </button>
      </div>
    </div>
    // </CSSTransition>
    
  );
}
export default withRouter(Help);
