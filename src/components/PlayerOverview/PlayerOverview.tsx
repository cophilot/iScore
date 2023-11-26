/* eslint-disable indent */
import React, { useState } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn.tsx';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton.tsx';
import scoreIcon from '../../assets/icons/score.png';
import githubIcon from '../../assets/icons/github.png';
import pbIcon from '../../assets/icons/pb.png';
//import PlayerManager from '../../utils/PlayerManager.ts';
import SettingsButton from '../SettingsButton/SettingsButton.tsx';
import { Link } from 'react-router-dom';

function PlayerOverview() {
    const [name, setName] = useState('Players');

    const doNothing = () => {
        setName(name);
    };

    return (
        <div>
            <div className="container">
                <div className="display">
                    <div className="displayText">{name}</div>
                </div>
                <div className="row">
                    <button
                        className="calBtn lightGrey first"
                        onClick={doNothing}
                    >
                        C
                    </button>
                    <a
                        className="calBtn lightGrey"
                        href="https://github.com/phil1436/iScore"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="icon" src={githubIcon} alt="GH"></img>
                    </a>
                    <a
                        className="calBtn lightGrey"
                        href="https://philipp-bonin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="icon" src={pbIcon} alt="PB"></img>
                    </a>
                    <SettingsButton></SettingsButton>
                </div>
                <div className="row">
                    <button className="calBtn grey first" onClick={doNothing}>
                        7
                    </button>
                    <button className="calBtn grey" onClick={doNothing}>
                        8
                    </button>
                    <button className="calBtn grey" onClick={doNothing}>
                        9
                    </button>
                    <PlayPauseButton></PlayPauseButton>
                </div>
                <div className="row">
                    <button className="calBtn grey first" onClick={doNothing}>
                        4
                    </button>
                    <button className="calBtn grey" onClick={doNothing}>
                        5
                    </button>
                    <button className="calBtn grey" onClick={doNothing}>
                        6
                    </button>
                    <button className={'calBtn orange'} onClick={doNothing}>
                        -
                    </button>
                </div>
                <div className="row">
                    <button className="calBtn grey first" onClick={doNothing}>
                        1
                    </button>
                    <button className="calBtn grey" onClick={doNothing}>
                        2
                    </button>
                    <button className="calBtn grey" onClick={doNothing}>
                        3
                    </button>
                    <Link
                        className="calBtn orange"
                        to="/add-player"
                        style={{ textDecoration: 'none' }}
                    >
                        +
                    </Link>
                </div>
                <div className="row">
                    <DoubleBtn onClick={doNothing} btnWidth={170}>
                        {'<'}
                    </DoubleBtn>
                    <button className="calBtn grey" onClick={doNothing}>
                        {'>'}
                    </button>
                    <Link className="calBtn orange" to="/">
                        <img className="icon" src={scoreIcon} alt="S"></img>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PlayerOverview;
