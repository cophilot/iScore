/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Header.scss';
import PlayerManager from '../../utils/PlayerManager.ts';

function Header() {
    const [time, setTime] = useState(0);
    const [roundNumber, setRoundNumber] = useState(
        PlayerManager.getCurrentRound()
    );

    // useEffect for roundNumber
    useEffect(() => {
        let interval: any = null;
        interval = setInterval(() => {
            setRoundNumber(PlayerManager.getCurrentRound());
        }, 1000);
        return () => clearInterval(interval);
    }, [roundNumber]);

    // State for timer

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: any = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const hours: number = Math.floor(time / 3600);

    // Minutes calculation
    const minutes: number = Math.floor((time % 3600) / 60);

    // Seconds calculation
    const seconds: number = time % 60;
    //setRoundNumber(PlayerManager.getCurrentRoundTest());
    // bind the round number so that it updates when the round number changes

    // Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const test = () => {
        PlayerManager.imcrementRoundTest();
    };

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };

    return (
        <div className="header">
            <p className="timer" onClick={startAndStop}>
                {hours.toString().padStart(2, '0')}:
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </p>
            <div className="iScore" onClick={test}>
                iScore
            </div>
            <div className="round">{roundNumber}</div>
        </div>
    );
}

export default Header;
