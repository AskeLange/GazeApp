

// Imports
import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store';
import AppInstance from './instance';
import './styling/base.scss';

// Entry point
const root = document.getElementById ('root');
ReactDOM.render (<AppInstance store={store} />, root); 