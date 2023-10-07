import React, { Component } from 'react';
import './PlayerBar.scss';
import PlayerElement from './PlayerElement';
import PlayerManager from '../../utils/PlayerManager';

export default class PlayerBar extends Component {
    render() {
        let playerElements = [];
        for (let player of PlayerManager.players) {
            playerElements.push(
                <PlayerElement
                    name={player.name}
                    color={player.color}
                    score={player.score}
                    active={false}
                    onClick={() => {}}></PlayerElement>
            );
        }

        return (
            <div class="scrollable-container">
                <div class="scrollable-content">{playerElements}</div>
            </div>
        );
    }
}
