import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '@/App';
import HelpList from '@views/HelpList';
import PrivacyAgreement from '@views/PrivacyAgreement';
import TermsService from '@views/TermsService';
import Help from '@views/Help';
import HelpDetails from '@views/HelpDetails';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/help" component={Help}/>
            <Route exact path="/helpList/:id" component={HelpList}/>
            <Route exact path="/privacyAgreement" component={PrivacyAgreement}/>
            <Route exact path="/termsService" component={TermsService}/>
            <Route exact path="/helpDetails/:id/:number" component={HelpDetails}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;