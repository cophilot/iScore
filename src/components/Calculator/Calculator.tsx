/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn.tsx';
import SettingsButton from '../SettingsButton/SettingsButton.tsx';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton.tsx';
import PlayerBar from '../PlayerBar/PlayerBar.tsx';
import {
    useGetCurrentPlayer,
    useRotate,
} from '../../providers/PlayerProvider.tsx';
import MyLink from '../MyLink/MyLink.tsx';

import playerIcon from '../../assets/icons/player.png';
import trophyIcon from '../../assets/icons/trophy.png';
import pbIcon from '../../assets/icons/pb.png';

function Calculator() {
    const [numberStr, setNumberStr] = useState('iScore');
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [add, setAdd] = useState(false);
    const [subtract, setSubtract] = useState(false);

    const getCurrentPlayer = useGetCurrentPlayer();
    const rotate = useRotate();
    //const getNextPlayer = useGetNextPlayer();

    useEffect(() => {
        let currentPlayer = getCurrentPlayer();
        if (currentPlayer === undefined) {
            return;
        }
        setNumber(currentPlayer.score);
        setNumberStr(currentPlayer.score.toString());
    }, [getCurrentPlayer()]);

    const onNumberClick = (n) => {
        let num = add || subtract ? number2 : number;
        let newNumber = num * 10 + n;
        if (add || subtract) {
            setNumber2(newNumber);
        } else {
            setNumber(newNumber);
        }

        setNumberStr(newNumber.toString());
    };

    const toggleAdd = () => {
        setAdd(!add);
        setSubtract(false);
        setNumber2(0);
    };

    const toggleSubtract = () => {
        setSubtract(!subtract);
        setAdd(false);
        setNumber2(0);
    };

    const equal = () => {
        let currentPlayer = getCurrentPlayer();
        if (currentPlayer === undefined) {
            return;
        }
        if (add) {
            let newNumber = number + number2;
            setNumber(newNumber);
            setNumberStr(newNumber.toString());
            currentPlayer.score = newNumber;
        } else if (subtract) {
            let newNumber = number - number2;
            setNumber(newNumber);
            setNumberStr(newNumber.toString());
            currentPlayer.score = newNumber;
        } else {
            rotate();
        }

        setAdd(false);
        setSubtract(false);
        setNumber2(0);
    };

    const clear = () => {
        if (add || subtract) {
            setNumber2(0);
        } else {
            setNumber(0);
        }
        setNumberStr('0');
    };

    return (
        <div>
            <PlayerBar emptyText="No players yet. Click the player icon to add a player."></PlayerBar>
            <div className="container">
                <div className="display">
                    <div className="displayText">{numberStr}</div>
                </div>
                <div className="row">
                    <button className="calBtn lightGrey first" onClick={clear}>
                        C
                    </button>
                    <a
                        className="calBtn lightGrey"
                        href="https://philipp-bonin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="icon" src={pbIcon} alt="PB"></img>
                    </a>
                    <MyLink lightGrey={true} to="/scoreboard">
                        <img className="icon" src={trophyIcon} alt="SB"></img>
                    </MyLink>
                    <SettingsButton></SettingsButton>
                </div>
                <div className="row">
                    <button
                        className="calBtn grey first"
                        onClick={() => onNumberClick(7)}
                    >
                        7
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(8)}
                    >
                        8
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(9)}
                    >
                        9
                    </button>
                    <PlayPauseButton></PlayPauseButton>
                </div>
                <div className="row">
                    <button
                        className="calBtn grey first"
                        onClick={() => onNumberClick(4)}
                    >
                        4
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(5)}
                    >
                        5
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(6)}
                    >
                        6
                    </button>
                    <button
                        className={
                            'calBtn ' + (subtract ? 'activatedBtn' : 'orange')
                        }
                        onClick={toggleSubtract}
                    >
                        -
                    </button>
                </div>
                <div className="row">
                    <button
                        className="calBtn grey first"
                        onClick={() => onNumberClick(1)}
                    >
                        1
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(2)}
                    >
                        2
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(3)}
                    >
                        3
                    </button>
                    <button
                        className={
                            'calBtn ' + (add ? 'activatedBtn' : 'orange')
                        }
                        onClick={toggleAdd}
                    >
                        +
                    </button>
                </div>
                <div className="row">
                    <DoubleBtn onClick={() => onNumberClick(0)} btnWidth={170}>
                        0
                    </DoubleBtn>
                    <MyLink grey={true} to="/player">
                        <img className="icon" src={playerIcon} alt="P"></img>
                    </MyLink>
                    <button className="calBtn orange" onClick={equal}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
