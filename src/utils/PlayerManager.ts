import Player from './Player.ts';

class PlayerManager {
    static players: Player[] = [];
    static currentPlayer?: Player = undefined;
    static roundTest = 1;

    static addPlayer(name, color) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].name === name) {
                return false;
            }
        }
        this.players.push(new Player(name, color));
        if (this.currentPlayer === undefined) {
            this.currentPlayer = this.players[0];
        }
        return true;
    }

    static setCurrentPlayer(name) {
        this.players.forEach((player) => {
            if (player.name === name) {
                PlayerManager.currentPlayer = player;
            }
        });
    }

    static rotate() {
        if (this.currentPlayer === undefined) {
            return;
        }

        let index = this.players.indexOf(this.currentPlayer);
        // remove player at index
        this.players.splice(index, 1);
        // add player at index to end of array
        this.currentPlayer.round++;
        this.players.push(this.currentPlayer);
        // set currentPlayer to first player in array
        this.currentPlayer = this.players[0];
    }

    static getCurrentRound() {
        let round = 1;
        this.players.forEach((player, index) => {
            if (index === 0) {
                round = player.round;
                return;
            }

            if (round === null) {
                round = player.round;
            } else if (round > player.round) {
                round = player.round;
            }
        });
        return round;
    }
    static getCurrentRoundTest() {
        return this.roundTest;
    }

    static imcrementRoundTest() {
        this.roundTest++;
    }
}

export default PlayerManager;
