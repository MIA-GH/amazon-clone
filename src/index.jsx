import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {StateProvider} from "./Provider/StateProvider";
import reducer, {initialState} from "./Provider/reducer";

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
    </StateProvider>,
    document.getElementById('root')
);