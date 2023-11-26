import React from 'react';
import './PlayerElement.scss';
import PlayerManager from '../../utils/PlayerManager.ts';

interface Props {
    name: string;
    color: string;
    score: number;
    active: boolean;
}

function PlayerElement({ name, color, score, active }: Props) {
    const selectPlayer = () => {
        PlayerManager.setCurrentPlayer(name);
    };

    return (
        <div
            className={'box ' + (active ? 'active' : '')}
            onClick={selectPlayer}>
            <div className="colorIcon" style={{ backgroundColor: color }}></div>
            <div className="textBox">
                <p className={'name ' + (active ? 'active' : '')}>{name}</p>
                <p className={'score ' + (active ? 'active' : '')}>{score}</p>
            </div>
        </div>
    );
}

export default PlayerElement;
