import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomepageContainer from './HomepageContainer.js'

ReactDOM.render(<HomepageContainer />, document.getElementById('root'));
registerServiceWorker();
