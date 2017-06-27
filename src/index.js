import React from 'react';
import {render} from 'react-dom';
import App from './react-components/App.js';
import css from './style.scss';

render(<App />, document.getElementById('mountNode'));
