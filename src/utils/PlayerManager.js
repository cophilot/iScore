import Player from './Player';

class PlayerManager {
    static players = [];
    static currentPlayer = undefined;

    static addPlayer(name, color) {
        this.players.forEach((player) => {
            if (player.name === name) {
                return false;
            }
        });
        this.players.push(new Player(name, color));
        return true;
    }

    setCurrentPlayer(name) {
        this.players.forEach((player) => {
            if (player.name === name) {
                PlayerManager.currentPlayer = player;
            }
        });
    }
}

export default PlayerManager;
