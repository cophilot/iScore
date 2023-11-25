/* eslint-disable indent */
import React, { Component } from 'react';
import './PlayerElement.scss';
import PlayerManager from '../../utils/PlayerManager.ts';
export default class PlayerElement extends Component {
    selectPlayer = () => {
        PlayerManager.setCurrentPlayer(this.props.name);
    };

    render() {
        return (
            <div
                className={'box ' + (this.props.active ? 'active' : '')}
                onClick={this.selectPlayer}>
                <div
                    className="colorIcon"
                    style={{ backgroundColor: this.props.color }}></div>
                <div className="textBox">
                    <p
                        className={
                            'name ' + (this.props.active ? 'active' : '')
                        }>
                        {this.props.name}
                    </p>
                    <p
                        className={
                            'score ' + (this.props.active ? 'active' : '')
                        }>
                        {this.props.score}
                    </p>
                </div>
            </div>
        );
    }
}
