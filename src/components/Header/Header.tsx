/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Header.scss';
import PlayerManager from '../../utils/PlayerManager.ts';
import { useTime } from '../../providers/TimeProvider.tsx';

function Header() {
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
            <div className="round">{1}</div>
        </div>
    );
}

export default Header;
