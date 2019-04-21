

// Imports
import React from 'react';
import ReactDOM from 'react-dom';

import Instance from './instance';
import { store } from './store';
import './styling/base.scss';

// Entry point
const root = document.getElementById ('root');
ReactDOM.render (<Instance store={store} />, root); 