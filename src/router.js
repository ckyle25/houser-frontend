import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home.js'
import Wizard1 from './components/WizardStep1/Wizard1.js'
import Wizard2 from './components/WizardStep2/Wizard2.js'
import Wizard3 from './components/WizardStep3/Wizard3.js'
import Wizard4 from './components/WizardStep4/Wizard4.js'
import Wizard5 from './components/WizardStep5/Wizard5.js'
import Landing from './components/Landing/Landing.js'

export default (
    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Landing} path='/landing' />
        <Route component={Wizard1} path='/wizard1' />
        <Route component={Wizard2} path='/wizard2' />
        <Route component={Wizard3} path='/wizard3' />
        <Route component={Wizard4} path='/wizard4' />
        <Route component={Wizard5} path='/wizard5' />
    </Switch>
)