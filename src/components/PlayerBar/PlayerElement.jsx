import React, { Component } from 'react';
import './PlayerElement.scss';
import PlayerManager from '../../utils/PlayerManager';
export default class PlayerElement extends Component {
    selectPlayer = () => {
        PlayerManager.setCurrentPlayer(this.props.name);
    };

    render() {
        return (
            <div
                class={'box ' + (this.props.active ? 'active' : '')}
                onClick={this.selectPlayer}>
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
