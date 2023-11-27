/* eslint-disable indent */
import React from 'react';
import './PlayerBar.scss';
import PlayerElement from './PlayerElement.tsx';
import { usePlayers } from '../../providers/PlayerProvider.tsx';
import { useGetCurrentPlayer } from '../../providers/PlayerProvider.tsx';
import Player from '../../utils/Player.ts';

function PlayerBar({ emptyText = 'No players yet.' }) {
    let playerElements: any[] = [];

    const players = usePlayers();
    const getCurrentPlayer = useGetCurrentPlayer();

    let currentPlayer = getCurrentPlayer();

    if (currentPlayer === undefined) {
        currentPlayer = new Player('', 'white');
    }

    for (let player of players) {
        playerElements.push(
            <PlayerElement
                name={player.name}
                color={player.color}
                score={player.score}
                active={player.name === currentPlayer.name}
                key={player.name}
            ></PlayerElement>
        );
    }
    if (playerElements.length === 0) {
        playerElements.push(
            <i style={{ color: 'white', marginTop: 10 }} key="noPlayer">
                {emptyText}
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
