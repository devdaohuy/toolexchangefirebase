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

function GamePlay(game,group,stages,summary) {
    this.game = game; // what game play
    this.group = {
        idGroup : group.id,
        name : group.name
    }; // what group play total member play
    this.stages = stages; // total stage play vd : stage1 stage2 stage3
    this.summary = summary; // summary players game
};

export {Player,Group,GamePlay};