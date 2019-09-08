function Player(name) {
    this.name = name;
    this.createAt = Date.now();
    this.groups = []
};

function Group(name,background,arrPlayers) {
    this.name = name;
    this.background = background;
    this.createAt = Date.now();
    this.players = arrPlayers;
    this.games = []
};

export {Player,Group};