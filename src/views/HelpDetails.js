import React from "react";
import Header from "@components/Header";
import "@css/helpList.styl";
import { data } from "@data/helpData";
function HelpDetails(props) {
    return (
      <div className="help-details">
        <Header
          titleSrc={require(`../images/ic_title_${props.match.params.id}.png`)}
        />
        
        <div className="list">
          <div className="mt-14 pl-10 pr-10 fs-15">
            <div className="content pl-14 pr-14 pt-14 pb-14">
              <div>
                {
                  data[props.match.params.id].content[
                    props.match.params.number
                  ].question
                }
              </div>
              <div className="mt-10 fc-blue">您好！</div>
              <div className="fc-blue fs-14 answer mt-4">
                {
                  data[props.match.params.id].content[
                    props.match.params.number
                  ].answer
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default HelpDetails;
