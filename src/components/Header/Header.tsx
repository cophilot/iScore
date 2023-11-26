/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Header.scss';
import { useTime } from '../../providers/TimeProvider.tsx';
import { useGetCurrentRound } from '../../providers/PlayerProvider.tsx';

function Header() {
    const getCurrentRound = useGetCurrentRound();

    const time = useTime();

    const hours: number = Math.floor(time / 3600);

    const minutes: number = Math.floor((time % 3600) / 60);

    const seconds: number = time % 60;

    return (
        <div className="header">
            <p className="timer">
                {hours.toString().padStart(2, '0')}:
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </p>
            <div className="iScore">iScore</div>
            <div className="round">{getCurrentRound()}</div>
        </div>
    );
}

export default Header;
