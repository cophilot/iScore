import React, { Component } from 'react';
import Calculator from './components/Calculator/Calculator.jsx';
import './index.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <div class="background"></div>
                <Calculator></Calculator>
            </div>
        );
    }
}
