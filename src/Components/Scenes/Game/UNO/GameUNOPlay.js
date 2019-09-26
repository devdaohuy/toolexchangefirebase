import React,{useState, useEffect} from 'react';
import GameUNOPlayModal from './GameUNOPlayModal';
import GameUNOGroupInfo from './GameUNOGroupInfo';
import GameUNOPlayStages from './GameUNOPlayStages';
import {oneWin, setPointPlayer, gameplayInStage} from './services';
import {getOne} from '../../../../services/api';
import {withRouter} from 'react-router'
import { Container, Header, Button, Checkbox, Icon, Table, Input, Divider } from 'semantic-ui-react';

function GameUNOPlay(props) {
    const {match} = props;

    const [group, setGroup] = useState({}); // get group will play
    const [stages, setStages] = useState([]); // stages will post in db

    const [stageNumber, setStageNumber] = useState(1); // number stage play
    const [gameplay, setGameplay] = useState([]); // stage already play
 
    const fetchGroup = async (idGroup) => {
        try {
            const res = await getOne('groups', idGroup);
            const newGame = res.players.map(player => ({
                idPlayer : player.idPlayer,
                name : player.name,
                point : 0,
                isWin : false
            }));
            setGroup(res);
            setGameplay(newGame);
        } catch(err) {
            console.log(err);
            setGroup([]);
            setGameplay([]);
        }
    };

    const nextStage = () => {
        let gamePlayInStage = gameplayInStage(gameplay);       
        
        // ===> Add Stage play to stages
        stages.push({
            stage : stageNumber, // number stage play
            gameplay : gamePlayInStage // gameplay already play this stage
        });
        setStages(stages); // Save to push Database
        // ==> New Game -> reset gameplay                  
        setStageNumber(stageNumber + 1); // change next stage
        setGameplay(() => {
            let newGame = group.players.map(player => ({
                idPlayer : player.idPlayer,
                name : player.name,
                point : 0,
                isWin : false
            }));
            return newGame;
        });
    };
 
    useEffect(() => { fetchGroup(match.params.groupID) }, []);

    //debugger;
    //console.log(gameplay);
    return (
        <Container>
            <Divider horizontal >
                <Header as='h3'> <Icon name='chess'/> Game Start </Header>
            </Divider>

            <GameUNOGroupInfo group={group} />     

            <Divider horizontal >
                <Header as='h4'> <Icon name='chess pawn' /> Stage : {stageNumber} </Header>
            </Divider>       
            
            <Table>
                
                <Table.Header fullWidth>
                    <Table.Row>
                        <Table.HeaderCell> <Header as='h4' color='red' textAlign='center' > Win </Header> </Table.HeaderCell>
                        <Table.HeaderCell> <Icon name='user' /> Player </Table.HeaderCell>
                        <Table.HeaderCell> <Icon name='chess board'/> Point Player Lose </Table.HeaderCell>
                        <Table.HeaderCell> <Icon name='winner'/> Win Game </Table.HeaderCell>
                        <Table.HeaderCell> <Icon name='keyboard' /> Total </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        gameplay.map((player,index,valueArray) => (
                            <Table.Row key={index} >
                                <Table.Cell collapsing>
                                    <Checkbox 
                                        slider
                                        value={player.name}
                                        checked={player.isWin}
                                        onChange={(event,data) => oneWin(valueArray,data.value, setGameplay)}
                                    />
                                </Table.Cell>
                                <Table.Cell> <Icon name='user outline' /> {player.name} </Table.Cell>

                                <Table.Cell>
                                    <Input
                                        type='number'
                                        value={player.point}
                                        name={player.name}
                                        disabled={player.isWin}
                                        placeholder={player.isWin ? ' Winner ' : ' Losser ' }
                                        onFocus={(event) => event.target.value = ''  }
                                        onChange={(event,data) => setPointPlayer(valueArray, data.name, data.value, setGameplay, event)}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        (player.isWin) ? 
                                        <Icon name='winner' />
                                        :
                                        <Icon name='thumbs down outline' />
                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        (player.isWin) ?
                                        <p> {(gameplay.reduce((acc,cur) => {
                                            return acc + parseInt(cur.point);
                                        },0))} </p>
                                        :
                                        <p> {player.point * -1} </p>
                                    }
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            {/* Begin Modal End Game */}
                            <GameUNOPlayModal
                                group={group}
                                stages={stages}
                            />
                            {/* ========= END ============== */}
                            <Button 
                                floated='right' 
                                color='orange' 
                                size='small' 
                                icon
                                onClick={() => nextStage() }
                                > 
                                <Icon name='arrow alternate circle right outline' /> Next Stage 
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

            <Divider horizontal >
                    <Header as='h4'> <Icon name='coffee' /> Stages Play  </Header>
            </Divider>

            <GameUNOPlayStages
                gameplay={gameplay}
                stages={stages}
            />
        </Container>
    )
};

export default withRouter(GameUNOPlay);