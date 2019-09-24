import React,{useState, useEffect} from 'react';
import GameGroupInfo from '../GameGroupInfo';
import GameTienLenStages from './GameTienlenPlayStages';
import {getOne} from '../../../../services/api';
import {addPointPlayer, playerIsWin} from './services';
import {withRouter} from 'react-router';
import { Container, Header, Button, Icon, Input, Divider, Card, Segment, Responsive } from 'semantic-ui-react';
import GameTienLenPlayModal from './GameTienLenPlayModal';

function GameTienLenPlay(props) {
    const {match} = props;

    const [group, setGroup] = useState({}); // get group will play

    const [stages, setStages] = useState([]);
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
    const handeChangePoint = (event,data, arrayGame) => {
        event.persist();
        //console.log(data);
        const {name, value} = data;
        setGameplay(() => addPointPlayer(name,value, arrayGame));
    };
    const addStage = () => {
        stages.push({
            stage: stageNumber,
            gameplay : playerIsWin(gameplay)
        });
        setStages(stages);
        // get new Stage
        setStageNumber(stageNumber + 1);
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
    //console.log(stages);
    return (
        <Container>
            <Divider horizontal >
                <Header as='h3'> <Icon name='chess'/> Game Start </Header>
            </Divider>

            <GameGroupInfo group={group} />     

            <Divider horizontal >
                <Header as='h4'> <Icon name='chess pawn' /> Stage : {stageNumber} </Header>
            </Divider>       

            <Card.Group>
                {
                    gameplay.map((game,index,arrayGame) => (
                        <Card key={index} >
                            <Card.Content>
                                <Card.Header> <Icon name='user' size='small'/> {game.name} </Card.Header>
                                <Card.Meta> Game Card Player </Card.Meta>
                                <Card.Description>
                                    {game.name} wants to challenge you !
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra textAlign='center' >
                                <Input
                                    type='number'
                                    value={game.point}
                                    name={game.name}
                                    disabled={game.isWin}
                                    placeholder={game.isWin ? ' Winner ' : ' Losser ' }
                                    onFocus={(event) => event.target.value = ''  }
                                    onChange={(event,data) => handeChangePoint(event,data,arrayGame) }
                                />
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
            <Divider horizontal> End </Divider>

            <Segment textAlign='center' >
                <Button.Group>
                    <Button
                        color='teal'
                        content='New Stage'
                        icon='add'
                        labelPosition='left'
                        onClick={() => addStage()}
                    />
                    <Button.Or />
                    <GameTienLenPlayModal
                        group={group}
                        stages={stages}
                    />
                </Button.Group>
            </Segment>   

            <Divider horizontal >
                <Header as='h3'> <Icon name='chess'/> Stages : </Header>
            </Divider>
            <Responsive
                {...Responsive.onlyMobile}
                >
                <GameTienLenStages
                    isMobile={true}
                    stages={stages}
                />
                
            </Responsive>

            <Responsive
                {...Responsive.onlyComputer}
            >
                <GameTienLenStages
                    isMobile={false}
                    stages={stages}
                    players={group.players}
                />
                
            </Responsive>
        </Container>
    )
};

export default withRouter(GameTienLenPlay);