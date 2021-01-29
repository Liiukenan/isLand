import React  from 'react'
import '../css/header.styl'
import {jsCallNative} from '../common/base'
function Header(props) {
    const goBack=()=>{
        let str=["/termsService","/serviceCharge","/privacyAgreement","/help"];
        let locationData=props.historyData;
        if(str.includes(locationData.match.path)){
            jsCallNative("backPage");
            return;
        }
        let path=locationData.match.params;
        switch (locationData.match.path) {
            case "/helpList/:id":
                locationData.history.push('/help');
                break;
            case "/helpDetails/:id/:number":
                locationData.history.push('/helpList/'+path.id);
                break;
            case "/helpHotDetails/:id/:number":
                locationData.history.push('/help');
                break;
            default:
                break;
        }
        if(locationData.match.path==="/serviceChargeInfo/:source"){
            if(locationData.match.params.source!=="0"){
                locationData.history.push('/serviceCharge');
            }else{
                jsCallNative("backPage");
            }
        }
    }
    const Title=()=>{
      
        if(props.historyData.location.pathname==='/termsService'){
            return(
                <span className="title-font">Terms of Use</span>
                
            )
        }
        if(props.historyData.location.pathname==='/privacyAgreement'){
             return(
                    <span className="title-font">Privacy Policy</span>
                )
        }
        return(

            <img src={props.titleSrc} alt="" className="title-img"/>
        )
        
    }

     return (
          
          <div className="header" id="header">

                <Title />
                <div className="back">
                    <button className="btn" onClick={goBack}>
                        
                    </button>
                    
                </div>
            </div>
      );
}
export default Header



