/* eslint-disable indent */
import React, { Component } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn';
import scoreIcon from '../../assets/icons/score.png';
import githubIcon from '../../assets/icons/github.png';
import pbIcon from '../../assets/icons/pb.png';
import PlayerManager from '../../utils/PlayerManager';
import { Link } from 'react-router-dom';

export default class PlayerOverview extends Component {
    state = {
        numberStr: 'Players',
        number: 0,
        number2: 0,
        add: false,
        subtract: false,
    };
    log(x) {
        console.log(x);
    }

    onNumberClick = (n) => {
        let num =
            this.state.add || this.state.subtract
                ? this.state.number2
                : this.state.number;
        let newNumber = num * 10 + n;
        if (this.state.add || this.state.subtract) {
            this.setState({ number2: newNumber });
        } else {
            this.setState({ number: newNumber });
        }

        this.setState({ numberStr: newNumber.toString() });
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
        if (this.state.add) {
            let newNumber = this.state.number + this.state.number2;
            this.setState({ number: newNumber });
            this.setState({ numberStr: newNumber });
            PlayerManager.currentPlayer.score = newNumber;
        } else if (this.state.subtract) {
            let newNumber = this.state.number - this.state.number2;
            this.setState({ number: newNumber });
            this.setState({ numberStr: newNumber });
            PlayerManager.currentPlayer.score = newNumber;
        } else {
            PlayerManager.rotate();
            this.setState({ number: PlayerManager.currentPlayer.score });
            this.setState({ numberStr: PlayerManager.currentPlayer.score });
        }
        this.setState({ number2: 0 });
        this.setState({ add: false });
        this.setState({ subtract: false });
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
        PlayerManager.addPlayer('Phil', 'red');
        PlayerManager.addPlayer('Viki', 'yellow');
        PlayerManager.addPlayer('Papa', 'green');
        PlayerManager.addPlayer('Mama', 'blue');
        PlayerManager.setCurrentPlayer('Phil');
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="display">
                        <div className="displayText">
                            {this.state.numberStr}
                        </div>
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
                            className="calBtn grey first"
                            onClick={() => this.onNumberClick(7)}>
                            7
                        </button>
                        <button
                            className="calBtn grey"
                            onClick={() => this.onNumberClick(8)}>
                            8
                        </button>
                        <button
                            className="calBtn grey"
                            onClick={() => this.onNumberClick(9)}>
                            9
                        </button>
                        <button className="calBtn orange">?</button>
                    </div>
                    <div className="row">
                        <button
                            className="calBtn grey first"
                            onClick={() => this.onNumberClick(4)}>
                            4
                        </button>
                        <button
                            className="calBtn grey"
                            onClick={() => this.onNumberClick(5)}>
                            5
                        </button>
                        <button
                            className="calBtn grey"
                            onClick={() => this.onNumberClick(6)}>
                            6
                        </button>
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
                            className="calBtn grey first"
                            onClick={() => this.onNumberClick(1)}>
                            1
                        </button>
                        <button
                            className="calBtn grey"
                            onClick={() => this.onNumberClick(2)}>
                            2
                        </button>
                        <button
                            className="calBtn grey"
                            onClick={() => this.onNumberClick(3)}>
                            3
                        </button>
                        <Link
                            className="calBtn orange"
                            to="/iScore/add-player"
                            style={{ textDecoration: 'none' }}>
                            +
                        </Link>
                    </div>
                    <div className="row">
                        <DoubleBtn
                            className="first"
                            onClick={() => this.onNumberClick(0)}
                            text="<"
                            btnWidth="170"></DoubleBtn>
                        <Link className="calBtn grey" to="/iScore">
                            <img className="icon" src={scoreIcon} alt="S"></img>
                        </Link>
                        <button className="calBtn orange" onClick={this.equal}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
