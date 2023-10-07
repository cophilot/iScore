import React, { Component } from 'react';
import './PlayerElement.scss';
export default class PlayerElement extends Component {
    render() {
        return (
            <div
                class={'box ' + (this.props.active ? 'active' : '')}
                onClick={this.props.onClick}>
                <div
                    class="colorIcon"
                    style={{ backgroundColor: this.props.color }}></div>
                <div class="textBox">
                    <p class={'name ' + (this.props.active ? 'active' : '')}>
                        {this.props.name}
                    </p>
                    <p class={'score ' + (this.props.active ? 'active' : '')}>
                        {this.props.score}
                    </p>
                </div>
            </div>
        );
    }
}
