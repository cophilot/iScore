/* eslint-disable indent */
import React, { Component } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn';
import playerIcon from '../../assets/icons/player.png';
import scoreIcon from '../../assets/icons/score.png';
import githubIcon from '../../assets/icons/github.png';
import pbIcon from '../../assets/icons/pb.png';
import PlayerManager from '../../utils/PlayerManager';
import { Link, useNavigate } from 'react-router-dom';

export default class AddPlayer extends Component {
    state = {
        nameInput: '',
        activeColor: 'red',
        wrongtext: '',
    };

    log(x) {
        console.log(x);
    }

    onColorClick = (n) => {
        this.setState({ activeColor: n });
    };

    toggleAdd = () => {
        this.setState({ add: !this.state.add });
        this.setState({ subtract: false });
        this.setState({ number2: 0 });
    };

    toggleSubtract = () => {
        this.setState({ subtract: !this.state.subtract });
        this.setState({ add: false });
        this.setState({ number2: 0 });
    };

    equal = () => {
        if (this.state.nameInput === '') {
            this.setState({ wrongtext: 'Please enter a name' });
            return;
        }
        if (
            !PlayerManager.addPlayer(
                this.state.nameInput,
                this.state.activeColor
            )
        ) {
            this.setState({ wrongtext: 'Player already exists' });
            return;
        }
        this.setState({ nameInput: '' });
    };

    clear = () => {
        if (this.state.add || this.state.subtract) {
            this.setState({ number2: 0 });
        } else {
            this.setState({ number: 0 });
        }
        this.setState({ numberStr: 0 });
    };

    addPlayer = () => {
        console.log(this.state.nameInput);
    };

    goToPlayerUrl = () => {
        useNavigate('/player');
    };

    render() {
        return (
            <div>
                <div className="container">
                    <p style={{ color: 'red' }}>{this.state.wrongtext}</p>
                    <div className="display">
                        <input
                            className="inputText"
                            placeholder="Add a Player"
                            value={this.state.nameInput}
                            onChange={(e) =>
                                this.setState({ nameInput: e.target.value })
                            }
                        />
                    </div>
                    <div className="row">
                        <button
                            className="calBtn lightGrey first"
                            onClick={this.clear}>
                            C
                        </button>
                        <a
                            className="calBtn lightGrey"
                            href="https://github.com/phil1436/iScore"
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className="icon"
                                src={githubIcon}
                                alt="GH"></img>
                        </a>
                        <a
                            className="calBtn lightGrey"
                            href="https://philipp-bonin.com/"
                            target="_blank"
                            rel="noreferrer">
                            <img className="icon" src={pbIcon} alt="PB"></img>
                        </a>
                        <button className="calBtn orange">?</button>
                    </div>
                    <div className="row">
                        <button
                            className={
                                'calBtn first' +
                                (this.state.activeColor === 'red'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'red' }}
                            onClick={() => this.onColorClick('red')}></button>
                        <button
                            className={
                                'calBtn' +
                                (this.state.activeColor === 'blue'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'blue' }}
                            onClick={() => this.onColorClick('blue')}></button>
                        <button
                            className={
                                'calBtn' +
                                (this.state.activeColor === 'green'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'green' }}
                            onClick={() => this.onColorClick('green')}></button>

                        <button className="calBtn orange">?</button>
                    </div>
                    <div className="row">
                        <button
                            className={
                                'calBtn first' +
                                (this.state.activeColor === 'yellow'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'yellow' }}
                            onClick={() =>
                                this.onColorClick('yellow')
                            }></button>
                        <button
                            className={
                                'calBtn' +
                                (this.state.activeColor === 'purple'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'purple' }}
                            onClick={() =>
                                this.onColorClick('purple')
                            }></button>
                        <button
                            className={
                                'calBtn' +
                                (this.state.activeColor === 'darkblue'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'darkblue' }}
                            onClick={() =>
                                this.onColorClick('darkblue')
                            }></button>
                        <button
                            className={
                                'calBtn ' +
                                (this.state.subtract
                                    ? 'activatedBtn'
                                    : 'orange')
                            }
                            onClick={this.toggleSubtract}>
                            -
                        </button>
                    </div>
                    <div className="row">
                        <button
                            className={
                                'calBtn first' +
                                (this.state.activeColor === 'orange'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'orange' }}
                            onClick={() =>
                                this.onColorClick('orange')
                            }></button>
                        <button
                            className={
                                'calBtn' +
                                (this.state.activeColor === 'grey'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'grey' }}
                            onClick={() => this.onColorClick('grey')}></button>
                        <button
                            className={
                                'calBtn' +
                                (this.state.activeColor === 'magenta'
                                    ? ' circled'
                                    : '')
                            }
                            style={{ backgroundColor: 'magenta' }}
                            onClick={() =>
                                this.onColorClick('magenta')
                            }></button>
                        <button
                            className={
                                'calBtn ' +
                                (this.state.add ? 'activatedBtn' : 'orange')
                            }
                            onClick={this.toggleAdd}>
                            +
                        </button>
                    </div>
                    <div className="row">
                        <DoubleBtn
                            className="first"
                            onClick={this.equal}
                            text="Add"
                            btnWidth="170"></DoubleBtn>
                        <Link className="calBtn grey" to="/iScore/player">
                            <img
                                className="icon"
                                src={playerIcon}
                                alt="P"></img>
                        </Link>
                        <Link className="calBtn orange" to="/iScore">
                            <img className="icon" src={scoreIcon} alt="S"></img>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
