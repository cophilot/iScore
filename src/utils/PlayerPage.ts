import Player from './Player.ts';

class PlayerPage {
    private players: (Player | undefined)[][] = [];

    constructor() {
        this.players = [[], [], []];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.players[i].push(undefined);
            }
        }
    }

    public addPlayer(player: Player): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.players[i][j] === undefined) {
                    this.players[i][j] = player;
                    return true;
                }
            }
        }
        return false;
    }

    public getPlayer(x: number, y: number): Player | undefined {
        return this.players[x][y];
    }

    public isFull(): boolean {
        this.players.forEach((row) => {
            row.forEach((player) => {
                if (player === undefined) {
                    return false;
                }
            });
        });
        return true;
    }

    public isEmpty(): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.players[i][j] != undefined) {
                    return false;
                }
            }
        }
        return true;
    }
}

export default PlayerPage;
