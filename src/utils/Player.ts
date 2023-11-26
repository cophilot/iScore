class Player {
    name: string;
    color: string;
    score: number;
    round: number;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
        this.score = 0;
        this.round = 1;
    }

    static getEmptyPlayerArray(): Player[] {
        return [];
    }
}

export default Player;
