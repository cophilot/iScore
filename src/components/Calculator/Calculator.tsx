/* eslint-disable indent */
import React, { useState } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn.tsx';
import SettingsButton from '../SettingsButton/SettingsButton.tsx';
import playerIcon from '../../assets/icons/player.png';
import githubIcon from '../../assets/icons/github.png';
import pbIcon from '../../assets/icons/pb.png';
import PlayerBar from '../PlayerBar/PlayerBar.jsx';
import PlayerManager from '../../utils/PlayerManager.ts';
import { Link } from 'react-router-dom';

function Calculator() {
    const [numberStr, setNumberStr] = useState('iScore');
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [add, setAdd] = useState(false);
    const [subtract, setSubtract] = useState(false);

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
        if (add) {
            let newNumber = number + number2;
            setNumber(newNumber);
            setNumberStr(newNumber.toString());
            if (PlayerManager.currentPlayer) {
                PlayerManager.currentPlayer.score = newNumber;
            }
        } else if (subtract) {
            let newNumber = number - number2;
            setNumber(newNumber);
            setNumberStr(newNumber.toString());
            if (PlayerManager.currentPlayer) {
                PlayerManager.currentPlayer.score = newNumber;
            }
        } else if (PlayerManager.currentPlayer) {
            PlayerManager.rotate();
            setNumber(PlayerManager.currentPlayer.score);
            setNumberStr(PlayerManager.currentPlayer.score.toString());
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

    /* const addPlayer = () => {
        PlayerManager.addPlayer('Phil', 'red');
        PlayerManager.addPlayer('Viki', 'yellow');
        PlayerManager.addPlayer('Papa', 'green');
        PlayerManager.addPlayer('Mama', 'blue');
        PlayerManager.setCurrentPlayer('Phil');
        goToPlayerUrl();
    }; */

    /* const goToPlayerUrl = () => {
        useNavigate('/player');
    }; */

    return (
        <div>
            <PlayerBar></PlayerBar>
            <div className="container">
                <div className="display">
                    <div className="displayText">{numberStr}</div>
                </div>
                <div className="row">
                    <button
                        className="calBtn lightGrey first"
                        /* style={{ color: 'black !important' }} */
                        onClick={clear}>
                        C
                    </button>
                    <a
                        className="calBtn lightGrey"
                        href="https://github.com/phil1436/iScore"
                        target="_blank"
                        rel="noreferrer">
                        <img className="icon" src={githubIcon} alt="GH"></img>
                    </a>
                    <a
                        className="calBtn lightGrey"
                        href="https://philipp-bonin.com/"
                        target="_blank"
                        rel="noreferrer">
                        <img className="icon" src={pbIcon} alt="PB"></img>
                    </a>
                    <SettingsButton></SettingsButton>
                </div>
                <div className="row">
                    <button
                        className="calBtn grey first"
                        onClick={() => onNumberClick(7)}>
                        7
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(8)}>
                        8
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(9)}>
                        9
                    </button>
                    <button className="calBtn orange">?</button>
                </div>
                <div className="row">
                    <button
                        className="calBtn grey first"
                        onClick={() => onNumberClick(4)}>
                        4
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(5)}>
                        5
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(6)}>
                        6
                    </button>
                    <button
                        className={
                            'calBtn ' + (subtract ? 'activatedBtn' : 'orange')
                        }
                        onClick={toggleSubtract}>
                        -
                    </button>
                </div>
                <div className="row">
                    <button
                        className="calBtn grey first"
                        onClick={() => onNumberClick(1)}>
                        1
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(2)}>
                        2
                    </button>
                    <button
                        className="calBtn grey"
                        onClick={() => onNumberClick(3)}>
                        3
                    </button>
                    <button
                        className={
                            'calBtn ' + (add ? 'activatedBtn' : 'orange')
                        }
                        onClick={toggleAdd}>
                        +
                    </button>
                </div>
                <div className="row">
                    <DoubleBtn onClick={() => onNumberClick(0)} btnWidth={170}>
                        0
                    </DoubleBtn>
                    <Link className="calBtn grey" to="/player">
                        <img className="icon" src={playerIcon} alt="P"></img>
                    </Link>
                    <button className="calBtn orange" onClick={equal}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
