import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store.js'
import router from './router.js'
import Tile from './components/Tile/Tile.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    {router}
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();


