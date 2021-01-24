import React, { useState,useEffect,useRef } from 'react'
import '../css/help.styl'
import Header from '../components/Header'
import { Link, withRouter } from 'react-router-dom'
import { data } from '../data/helpData'
import { jsCallNative } from '../common/base'

function Help(props) {
  const scroll = useRef();
  const main = useRef();
  const hotTitle = useRef();
  const contentService=useRef();
  const [wrapperHeight,setWrapperHeight]=useState('')
  const linkArr = ['注册邀请', '活动', '海盗团', '福利中心']
  const [arr] = useState(linkArr)
  const contactService = () => {
    jsCallNative('jumpAiHelper')
  }
  const link = arr.map((item, index) => {
    let path = '/helpList/' + index
    return (
      <Link
        to={path}
        className="title mt-18 flex-items-center flex-justify-center"
        key={index}
      >
        <img src={require(`../images/ic_service_${index}.png`)} alt="" />
        <span className="fs-16 mt-4 ml-4" key={index}>
          {item}
        </span>
      </Link>
    )
  })
  useEffect(() => {
    const mainHeight=main.current.offsetHeight;
    const hotTitleHeight=hotTitle.current.offsetHeight;
    const contentTop=80;
    const hotTitleTop=20;
    // const contentServiceHeight=contentService.current.offsetHeight;
    const scrollHeight=document.body.clientHeight-mainHeight-hotTitleHeight-contentTop-hotTitleTop;
    setWrapperHeight(scrollHeight)
    // 获取热门问题高度
    // new BScroll(scroll.current, {
    //   probeType: 3,
    //   click: true
    // })
  }, []);
  
  return (
    <div className="customer" id="customer">
      <Header
        titleSrc={require('../images/ic_service.png')}
        historyData={props}
      />
      <div className="content">
        <div className="main flex-between flex-wrap pl-16 pr-16" ref={main}>{link}</div>
        <div className="hot-title pl-16 mt-20 flex-items-center" ref={hotTitle}>
          <img src={require('../images/ic_service_hot.png')} alt="" />
          <span className="ml-4 mt-4 fs-16">热门问题</span>
        </div>
          <div className="scroll-wrapper mt-15 pl-16 pr-16" ref={scroll} style={{height:wrapperHeight}}>
            <div className="question-list fs-14 scroll-content">
              {data[4].content.map((item, index) => {
                return (
                  <Link
                    to={`/helpHotDetails/4/${index}`}
                    key={index}
                    className="flex-items-center pl-10 mb-4"
                  >
                    {item.question}
                  </Link>
                )
              })}
            </div>
        </div>
        

        <div className="contect-service flex-justify-center flex-items-center" ref={contentService}>
          <button
            className="btn fs-18 flex-items-center flex-justify-center"
            onClick={contactService}
          >
            <img src={require('../images/ic_service_contact.png')} alt="" />
            <span className="ml-6">联系客服</span>
          </button>
        </div>
      </div>
    </div>

    // </CSSTransition>
  )
}
export default withRouter(Help)
