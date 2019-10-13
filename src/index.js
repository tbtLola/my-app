import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/styles.css';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
