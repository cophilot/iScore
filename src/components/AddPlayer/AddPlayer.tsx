import React, { useState } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn.tsx';
import SettingsButton from '../SettingsButton/SettingsButton.tsx';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton.tsx';
import playerIcon from '../../assets/icons/player.png';
import scoreIcon from '../../assets/icons/score.png';
import trophyIcon from '../../assets/icons/trophy.png';
import pbIcon from '../../assets/icons/pb.png';
import { Link } from 'react-router-dom';
import { useAddPlayer } from '../../providers/PlayerProvider.tsx';
import PlayerBar from '../PlayerBar/PlayerBar.tsx';

function AddPlayer() {
    const [nameInput, setNameInput] = useState('');
    const [activeColor, setActiveColor] = useState('red');
    const [wrongtext, setWrongtext] = useState('');

    const addPlayer = useAddPlayer();

    const onColorClick = (color: string) => {
        setActiveColor(color);
    };

    const add = () => {
        if (nameInput === '') {
            setWrongtext('Please enter a name');
            return;
        }
        if (!addPlayer(nameInput, activeColor)) {
            setWrongtext('Player already exists');
            return;
        }
        setNameInput('');
    };

    const clear = () => {
        setNameInput('');
    };

    return (
        <div>
            <PlayerBar emptyText="No players yet. You can add a player here."></PlayerBar>
            <div className="container">
                <p style={{ color: 'red' }}>{wrongtext}</p>
                <div className="display">
                    <input
                        className="inputText"
                        placeholder="Add a Player"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
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
                    <Link className="calBtn lightGrey" to="/scoreboard">
                        <img className="icon" src={trophyIcon} alt="SB"></img>
                    </Link>
                    <SettingsButton></SettingsButton>
                </div>
                <div className="row">
                    <button
                        className={
                            'calBtn first' +
                            (activeColor === 'red' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'red' }}
                        onClick={() => onColorClick('red')}
                    ></button>
                    <button
                        className={
                            'calBtn' +
                            (activeColor === 'blue' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'blue' }}
                        onClick={() => onColorClick('blue')}
                    ></button>
                    <button
                        className={
                            'calBtn' +
                            (activeColor === 'green' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'green' }}
                        onClick={() => onColorClick('green')}
                    ></button>

                    <PlayPauseButton></PlayPauseButton>
                </div>
                <div className="row">
                    <button
                        className={
                            'calBtn first' +
                            (activeColor === 'yellow' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'yellow' }}
                        onClick={() => onColorClick('yellow')}
                    ></button>
                    <button
                        className={
                            'calBtn' +
                            (activeColor === 'purple' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'purple' }}
                        onClick={() => onColorClick('purple')}
                    ></button>
                    <button
                        className={
                            'calBtn' +
                            (activeColor === 'darkblue' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'darkblue' }}
                        onClick={() => onColorClick('darkblue')}
                    ></button>
                    <button className={'calBtn orange'}>-</button>
                </div>
                <div className="row">
                    <button
                        className={
                            'calBtn first' +
                            (activeColor === 'orange' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'orange' }}
                        onClick={() => onColorClick('orange')}
                    ></button>
                    <button
                        className={
                            'calBtn' +
                            (activeColor === 'grey' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'grey' }}
                        onClick={() => onColorClick('grey')}
                    ></button>
                    <button
                        className={
                            'calBtn' +
                            (activeColor === 'magenta' ? ' circled' : '')
                        }
                        style={{ backgroundColor: 'magenta' }}
                        onClick={() => onColorClick('magenta')}
                    ></button>
                    <button className={'calBtn orange'} onClick={add}>
                        +
                    </button>
                </div>
                <div className="row">
                    <DoubleBtn onClick={add} btnWidth={170}>
                        Add
                    </DoubleBtn>
                    <Link className="calBtn grey" to="/player">
                        <img className="icon" src={playerIcon} alt="P"></img>
                    </Link>
                    <Link className="calBtn orange" to="/">
                        <img className="icon" src={scoreIcon} alt="S"></img>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AddPlayer;
