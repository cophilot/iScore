import React, { Component } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn';
import playerIcon from '../../assets/icons/player.png';
import githubIcon from '../../assets/icons/github.png';
import pbIcon from '../../assets/icons/pb.png';
import PlayerBar from '../PlayerBar/PlayerBar';
import PlayerManager from '../../utils/PlayerManager';
import { Link, useNavigate } from 'react-router-dom';
export default class Calculator extends Component {
    state = {
        numberStr: 'iScore',
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
            if (PlayerManager.currentPlayer) {
                PlayerManager.currentPlayer.score = newNumber;
            }
        } else if (this.state.subtract) {
            let newNumber = this.state.number - this.state.number2;
            this.setState({ number: newNumber });
            this.setState({ numberStr: newNumber });
            if (PlayerManager.currentPlayer) {
                PlayerManager.currentPlayer.score = newNumber;
            }
        } else if (PlayerManager.currentPlayer) {
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
        this.goToPlayerUrl();
    };

    goToPlayerUrl = () => {
        useNavigate('/player');
    };

    render() {
        return (
            <div>
                <PlayerBar></PlayerBar>
                <div className="container">
                    <div class="display">
                        <div class="displayText">{this.state.numberStr}</div>
                    </div>
                    <div class="row">
                        <button
                            class="calBtn lightGrey first"
                            onClick={this.clear}>
                            C
                        </button>
                        <a
                            class="calBtn lightGrey"
                            href="https://github.com/phil1436/iScore"
                            target="_blank"
                            rel="noreferrer">
                            <img class="icon" src={githubIcon} alt="GH"></img>
                        </a>
                        <a
                            class="calBtn lightGrey"
                            href="https://philipp-bonin.com/"
                            target="_blank"
                            rel="noreferrer">
                            <img class="icon" src={pbIcon} alt="PB"></img>
                        </a>
                        <button class="calBtn orange">?</button>
                    </div>
                    <div class="row">
                        <button
                            class="calBtn grey first"
                            onClick={() => this.onNumberClick(7)}>
                            7
                        </button>
                        <button
                            class="calBtn grey"
                            onClick={() => this.onNumberClick(8)}>
                            8
                        </button>
                        <button
                            class="calBtn grey"
                            onClick={() => this.onNumberClick(9)}>
                            9
                        </button>
                        <button class="calBtn orange">?</button>
                    </div>
                    <div class="row">
                        <button
                            class="calBtn grey first"
                            onClick={() => this.onNumberClick(4)}>
                            4
                        </button>
                        <button
                            class="calBtn grey"
                            onClick={() => this.onNumberClick(5)}>
                            5
                        </button>
                        <button
                            class="calBtn grey"
                            onClick={() => this.onNumberClick(6)}>
                            6
                        </button>
                        <button
                            class={
                                'calBtn ' +
                                (this.state.subtract
                                    ? 'activatedBtn'
                                    : 'orange')
                            }
                            onClick={this.toggleSubtract}>
                            -
                        </button>
                    </div>
                    <div class="row">
                        <button
                            class="calBtn grey first"
                            onClick={() => this.onNumberClick(1)}>
                            1
                        </button>
                        <button
                            class="calBtn grey"
                            onClick={() => this.onNumberClick(2)}>
                            2
                        </button>
                        <button
                            class="calBtn grey"
                            onClick={() => this.onNumberClick(3)}>
                            3
                        </button>
                        <button
                            class={
                                'calBtn ' +
                                (this.state.add ? 'activatedBtn' : 'orange')
                            }
                            onClick={this.toggleAdd}>
                            +
                        </button>
                    </div>
                    <div class="row">
                        <DoubleBtn
                            class="first"
                            onClick={() => this.onNumberClick(0)}
                            text="0"
                            btnWidth="170"></DoubleBtn>
                        <Link class="calBtn grey" to="/player">
                            <img class="icon" src={playerIcon} alt="P"></img>
                        </Link>
                        <button class="calBtn orange" onClick={this.equal}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
