/* eslint-disable indent */
import React from 'react';
import './PlayerBar.scss';
import PlayerElement from './PlayerElement.tsx';
import PlayerManager from '../../utils/PlayerManager.ts';

function PlayerBar() {
    let playerElements: any[] = [];
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
                key={player.name}></PlayerElement>
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

export default PlayerBar;
