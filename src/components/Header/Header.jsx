import React, { Component } from 'react';
import './Header.scss';
import PlayerManager from '../../utils/PlayerManager';

export default class Header extends Component {
    state = {
        round: 1,
    };
    render() {
        return (
            <div class="header">
                <div class="timer">4:59</div>
                <div class="iScore">iScore</div>
                <div class="round">{PlayerManager.getCurrentRound()}</div>
            </div>
        );
    }
}
