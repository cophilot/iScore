import React from 'react';
import './Header.scss';
import { useGetTimeAsString } from '../../providers/TimeProvider.tsx';
import { useGetCurrentRound } from '../../providers/PlayerProvider.tsx';

function Header() {
    const getCurrentRound = useGetCurrentRound();

    const timeString = useGetTimeAsString();

    return (
        <div className="header">
            <p className="timer">{timeString()}</p>
            <div className="iScore">iScore</div>
            <div className="round">{getCurrentRound()}</div>
        </div>
    );
}

export default Header;
