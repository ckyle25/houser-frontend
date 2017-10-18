import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import router from './router.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
{router}
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
