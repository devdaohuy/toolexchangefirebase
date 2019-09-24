// ===> set only player win
function oneWin(arrayGames,winner,setState) {
    let newArrayGame = arrayGames.map(inGame => {
        if (inGame.name === winner) {
            inGame.isWin = true;
            return inGame;
        } else {
            inGame.isWin = false;
            return inGame;
        }
    });
    setState(newArrayGame);
};
// ===> set Point every add game form
function setPointPlayer(arrayGames,player,point,setState,event) {
    event.persist();
    let newPointPlayer = arrayGames.map(game => {
        if (game.name === player ) {
            game.point = parseInt(point);
            return game;
        } else {
            return game;
        }
    });
    setState(newPointPlayer);
};

function pointWinner(stages,winner) {
    let pointWinArray = []; // Array Point Winner namePlayer
    stages.forEach(stage => {
        stage.gameplay.forEach(game => {
            if ( game.name === winner ) {
                pointWinArray.push(parseInt(game.point));
            }
        })            
    });
    let pointWin = pointWinArray.reduce((acc,cur) => acc + cur, 0 ); // Total Number
    //console.log(pointWin);
    return pointWin;
};

function gameplayInStage(arrayGames) {
    // ===> point who player win : total point lose player
    let pointWin = arrayGames.reduce((acc,cur) => {
        if (cur.isWin === true) {
            return acc;
        } else {
            return acc + parseInt(cur.point);
        }
    },0);

    // declare player point win and lose player point lose
    let gamePlay = arrayGames.map(value => {
        if (value.isWin === true) {
            value.point = pointWin; // point win = total point lose
            return value;
        } else {
            value.point = value.point * -1; // point lose
            return value;
        }
    });
    return gamePlay;
};

function summaryStages(stages, players) {
    // Create summary point every stage
    let newSummary = players.map(player => ({
        idPlayer : player.idPlayer,
        name : player.name,
        point : pointWinner(stages,player.name), // total point game win every stages
        isWin : false // default false
    }));
    // find point winner is Max
    let winPoint = newSummary.reduce((acc,cur) => {
        return Math.max(acc, cur.point);
    },0);
    // check who max point this game and check win true
    newSummary.map(summary => {
        if ( summary.point === winPoint ) {
            summary.isWin = true;
            return summary;
        } else {
            summary.isWin = false;
            return summary;
        }
    });
    return newSummary;
};


export {oneWin, setPointPlayer, pointWinner, gameplayInStage, summaryStages};