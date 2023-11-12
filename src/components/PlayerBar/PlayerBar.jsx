/* eslint-disable indent */
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
                    active={
                        player.name ===
                        (PlayerManager.currentPlayer == null
                            ? ''
                            : PlayerManager.currentPlayer.name)
                    }
                    onClick={() => {
                        null;
                    }}></PlayerElement>
            );
        }
        if (playerElements.length === 0) {
            playerElements.push(
                <i style={{ color: 'white', marginTop: 10 }}>
                    No players yet. Click the player icon to add a player.
                </i>
            );
        }
        return (
            <div className="scrollable-container">
                <div className="scrollable-content">{playerElements}</div>
            </div>
        );
    }
}
