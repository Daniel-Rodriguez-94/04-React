// "sfc" para comenzar componente REACT

import React from 'react';
import ReactDOM from 'react-dom/client';
import {CounterApp} from './CounterApp';

//import {FirstApp} from './FirstApp';
import "./style.css"

//import { HelloWorldApp } from './HelloWorldApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {2} />
    </React.StrictMode>
)
