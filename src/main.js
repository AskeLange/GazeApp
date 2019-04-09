

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Instance from './instance';
import { store } from './store';

// Entry point
const root = document.getElementById ('root');
ReactDOM.render (<Instance store={store} />, root); 