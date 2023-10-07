import React, { Component } from 'react';
import './DoubleBtn.scss';

export default class DoubleBtn extends Component {
    state = {
        text: '',
        btnWidth: 0,
    };

    render() {
        return (
            <div class="dblBtn" onClick={this.props.onClick}>
                <button class="left circle">{this.props.text}</button>
                <div
                    class="middle"
                    style={{ width: this.props.btnWidth - 75 }}></div>
                <div class="right circle"></div>
            </div>
        );
    }
}
