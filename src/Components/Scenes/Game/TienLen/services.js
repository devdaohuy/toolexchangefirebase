function addPointPlayer(name,point,gameplayArr) {
    let newGameplayArr = gameplayArr.map(game => {
        if ( game.name === name ) {
            game.point = parseInt(point);
            return game;
        } else return game;
    });
    return newGameplayArr;
};

function playerIsWin(gameplay) {
    let maxPoint = gameplay.reduce((acc,cur) => Math.max(acc,cur.point), 0 );
    let newGameplay = gameplay.map(game => {
        if ( game.point === maxPoint ) {
            game.isWin = true;
            return game;
        } else {
            game.isWin = false;
            return game;
        }
    });
    return newGameplay;
};

function summaryPlayers(stages,players) {
    console.log(stages);
    let newSummary = players.map(player => {
        let newSummaryPlayer = {
            idPlayer : player.idPlayer,
            name : player.name,
            point : 0,
            isWin : false
        };
        stages.forEach(stage => {
            stage.gameplay.forEach(game => {
                if(game.name === newSummaryPlayer.name) {
                    newSummaryPlayer.point += game.point;
                }
            });
        });
        return newSummaryPlayer;
    });
    playerIsWin(newSummary);
    console.log(newSummary);
    return newSummary;
};

export {addPointPlayer, playerIsWin, summaryPlayers};