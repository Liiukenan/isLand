import React from 'react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import HelpList from '../views/HelpList';
import HelpHotDetails from '../views/HelpHotDetails';
import PrivacyAgreement from '../views/PrivacyAgreement';
import TermsService from '../views/TermsService';
import Help from '../views/Help';
import HelpDetails from '../views/HelpDetails';
import ServiceCharge from '../views/ServiceCharge';
import ServiceChargeInfo from '../views/ServiceChargeInfo';

// import App from "../App"
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {/* <Route  path="/" exact component={App}/> */}
            
            <Route  path="/help" component={Help}/>
            <Route  path="/helpList/:id" component={HelpList}/>
            <Route  path="/helpHotDetails/:id/:number" component={HelpHotDetails}/>
            <Route  path="/privacyAgreement" component={PrivacyAgreement}/>
            <Route  path="/termsService" component={TermsService}/>
            <Route  path="/helpDetails/:id/:number" component={HelpDetails}/>
            <Route  path="/serviceCharge" component={ServiceCharge}/>
            <Route  path="/serviceChargeInfo/:source" component={ServiceChargeInfo}/>
            <Redirect to="/help"/> 
        </Switch>
    </HashRouter>
);


export default BasicRoute;