import React, { Component } from 'react';
import './DoubleBtn.scss';

export default class DoubleBtn extends Component {
    state = {
        text: '',
        btnWidth: 0,
    };

    render() {
        return (
            <div className="dblBtn" onClick={this.props.onClick}>
                <button className="left circle">{this.props.text}</button>
                <div
                    className="middle"
                    style={{ width: this.props.btnWidth - 75 }}></div>
                <div className="right circle"></div>
            </div>
        );
    }
}
